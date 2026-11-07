import { test, expect } from '@playwright/test';

const repositories = Array.from({ length: 5 }, (_, index) => ({
  id: index,
  name: `projeto-${index}`,
  html_url: `https://github.com/BernardoApl/projeto-${index}`,
  description: 'Projeto de software e dados',
  language: 'TypeScript',
  stargazers_count: 2,
  updated_at: '2026-11-01T12:00:00Z',
  fork: false,
}));

test.beforeEach(async ({ page }) => {
  await page.route('https://api.github.com/**', (route) => route.fulfill({ json: repositories }));
});

test('preferences persist and resume languages work', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.project-card')).toHaveCount(5);
  await page.getByRole('button', { name: 'EN', exact: true }).click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en-US');
  await page.getByRole('button', { name: 'Toggle theme' }).click();
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en-US');
  await page.getByRole('button', { name: 'EN-US', exact: true }).click();
  await expect(page.getByRole('link', { name: 'Download PDF' })).toHaveAttribute(
    'href',
    'CV_main_EN-US.pdf',
  );
  await expect(page.locator('iframe')).toHaveAttribute('src', 'CV_main_EN-US.pdf#view=FitH');
  await page.locator('#resume-preview').scrollIntoViewIfNeeded();
  await expect(page.locator('#resume-preview')).toBeVisible();
  for (const file of ['CV_main_PT-BR.pdf', 'CV_main_EN-US.pdf', 'bernardo-profile.png']) {
    const response = await page.request.get(`/${file}`);
    expect(response.ok()).toBeTruthy();
    expect(response.headers()['content-type']).toContain(
      file.endsWith('.pdf') ? 'application/pdf' : 'image/png',
    );
  }
});

test('GitHub failure can be retried', async ({ page }) => {
  await page.route('https://api.github.com/**', (route) =>
    route.fulfill({ status: 503, body: '{}' }),
  );
  await page.goto('/');
  await expect(page.getByText('Não foi possível carregar os projetos agora.')).toBeVisible();
  await page.route('https://api.github.com/**', (route) => route.fulfill({ json: repositories }));
  await page.getByRole('button', { name: 'Tentar novamente' }).click();
  await expect(page.locator('.project-card')).toHaveCount(5);
});

test('contact handles rejection and success without sending email', async ({ page }) => {
  await page.route('https://formsubmit.co/**', (route) =>
    route.fulfill({ json: { success: false } }),
  );
  await page.goto('/');
  await page.getByLabel('Nome', { exact: true }).fill('Teste local');
  await page.getByRole('textbox', { name: 'Email', exact: true }).fill('test@example.com');
  await page.getByLabel('Mensagem', { exact: true }).fill('Mensagem interceptada pelo teste.');
  await page.getByRole('button', { name: 'Enviar mensagem' }).click();
  await expect(
    page.getByText('Não foi possível enviar. Tente novamente ou entre em contato por email.'),
  ).toBeVisible();
  await expect(page.getByLabel('Nome', { exact: true })).toHaveValue('Teste local');
  await page.route('https://formsubmit.co/**', (route) =>
    route.fulfill({ json: { success: 'true' } }),
  );
  await page.getByRole('button', { name: 'Enviar mensagem' }).click();
  await expect(page.getByText('Mensagem enviada. Obrigado pelo contato!')).toBeVisible();
  await expect(page.getByLabel('Nome', { exact: true })).toHaveValue('');
});

test('desktop and mobile stay within viewport, navigation works and photo loads', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  for (const width of [1440, 1024, 768, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.locator('.project-card')).toHaveCount(5);
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    ).toBeTruthy();
    expect(
      await page
        .locator('.portrait img')
        .evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0),
    ).toBeTruthy();
    if (width < 901) {
      await page.getByRole('button', { name: 'Abrir menu' }).click();
      await page.getByRole('navigation').getByRole('link', { name: 'Sobre', exact: true }).click();
      await expect(page.getByRole('button', { name: 'Abrir menu' })).toHaveAttribute(
        'aria-expanded',
        'false',
      );
      await expect(page).toHaveURL(/#about$/);
    }
  }
  expect(errors).toEqual([]);
});

test('visual review captures', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await expect(page.locator('.project-card')).toHaveCount(5);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: 'test-results/desktop-viewport.png' });
  await page.locator('#projects').scrollIntoViewIfNeeded();
  await page.screenshot({ path: 'test-results/projects-viewport.png' });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: 'test-results/desktop.png', fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: 'test-results/mobile-viewport.png' });
  await page.screenshot({ path: 'test-results/mobile.png', fullPage: true });
  await page.getByRole('button', { name: 'Alternar tema' }).click();
  await page.screenshot({ path: 'test-results/light-viewport.png' });
});
