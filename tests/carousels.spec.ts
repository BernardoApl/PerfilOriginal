import { test, expect, type Page } from '@playwright/test';

const repos = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  name: `software-${index}`,
  html_url: `https://github.com/BernardoApl/software-${index}`,
  description: 'Software, dados e processos.',
  language: 'TypeScript',
  stargazers_count: 1,
  updated_at: '2026-11-01T12:00:00Z',
  fork: false,
}));
async function load(page: Page, data = repos) {
  await page.route('https://api.github.com/**', (route) => route.fulfill({ json: data }));
  await page.goto('/');
}
const transform = (page: Page, selector: string) =>
  page.locator(selector).evaluate((element) => getComputedStyle(element).transform);

test('project carousel moves, pauses on hover and focus, and supports manual navigation', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await load(page);
  await page.locator('#projects').scrollIntoViewIfNeeded();
  await page.mouse.move(0, 0);
  await expect(page.locator('.project-carousel')).toHaveAttribute('data-playing', 'true');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator('.project-carousel').scrollIntoViewIfNeeded();
  await expect(page.locator('.project-carousel')).toHaveAttribute('data-playing', 'true');
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.locator('.project-carousel').scrollIntoViewIfNeeded();
  const start = await transform(page, '.carousel-track');
  await expect.poll(() => transform(page, '.carousel-track')).not.toBe(start);
  await page.locator('.carousel-viewport').hover();
  await expect(page.locator('.project-carousel')).toHaveAttribute('data-playing', 'false');
  const stopped = await transform(page, '.carousel-track');
  await page.waitForTimeout(200);
  expect(await transform(page, '.carousel-track')).toBe(stopped);
  await page.mouse.move(0, 0);
  await expect(page.locator('.project-carousel')).toHaveAttribute('data-playing', 'true');
  await expect(page.locator('.carousel-toggle')).toHaveCount(0);
  await page.getByRole('button', { name: 'Próximo projeto' }).click();
  await expect(page.locator('.carousel-bottom')).toContainText('02');
  await page.locator('.project-link').first().focus();
  await expect(page.locator('.project-carousel')).toHaveAttribute('data-playing', 'false');
  await page
    .locator('.project-link')
    .first()
    .evaluate((element: HTMLElement) => element.blur());
  await page.mouse.move(0, 0);
  await expect(page.locator('.project-carousel')).toHaveAttribute('data-playing', 'true');
});

test('technology icons load and the seamless strip can be paused', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await load(page);
  await page.mouse.move(0, 0);
  const icons = page.locator('.technology-group').first().locator('img');
  await expect(icons).toHaveCount(8);
  for (const icon of await icons.all())
    expect(
      await icon.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0),
    ).toBeTruthy();
  const start = await transform(page, '.technology-track');
  await expect.poll(() => transform(page, '.technology-track')).not.toBe(start);
  await expect(page.locator('.technology-band button')).toHaveCount(0);
  await page.locator('.technology-band').hover();
  const stopped = await transform(page, '.technology-track');
  await page.waitForTimeout(200);
  expect(await transform(page, '.technology-track')).toBe(stopped);
  await expect(page.locator('.technology-group').nth(1)).toHaveAttribute('aria-hidden', 'true');
});

test('reduced motion stops both automatic carousels without losing manual controls', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await load(page);
  await page.locator('#projects').scrollIntoViewIfNeeded();
  await expect(page.locator('.project-carousel')).toHaveAttribute('data-playing', 'false');
  await expect(page.getByRole('button', { name: 'Pausar carrossel', exact: true })).toHaveCount(0);
  expect(
    await page.locator('.technology-track').evaluate((el) => getComputedStyle(el).animationName),
  ).toBe('none');
  await page.getByRole('button', { name: 'Próximo projeto' }).click();
  await expect(page.locator('.carousel-bottom')).toContainText('02');
});

test('one project and empty repositories remain usable', async ({ page }) => {
  await load(page, repos.slice(0, 1));
  await expect(page.locator('.project-card')).toHaveCount(1);
  await expect(page.getByRole('button', { name: 'Próximo projeto' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Pausar carrossel', exact: true })).toHaveCount(0);
  await page.route('https://api.github.com/**', (route) => route.fulfill({ json: [] }));
  await page.reload();
  await expect(page.getByText('Nenhum repositório disponível.')).toBeVisible();
  await expect(page.locator('.project-carousel')).toHaveCount(0);
});
