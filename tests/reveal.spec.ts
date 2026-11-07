import { test, expect } from '@playwright/test';

test('sections reveal on scroll and remain visible after leaving the viewport', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.route('https://api.github.com/**', (route) => route.fulfill({ json: [] }));
  await page.goto('/');
  const section = page.locator('.reveal').filter({ has: page.locator('#experience') });
  await expect(section).toHaveCSS('opacity', '0');
  await page.locator('#experience').scrollIntoViewIfNeeded();
  await expect(section).toHaveCSS('opacity', '1');
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await expect(section).toHaveCSS('opacity', '1');
});

test('reduced motion exposes content and portrait stays circular', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.route('https://api.github.com/**', (route) => route.fulfill({ json: [] }));
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto('/');
    const section = page.locator('.reveal').filter({ has: page.locator('#experience') });
    await expect(section).toHaveCSS('opacity', '1');
    const portrait = page.locator('.portrait img');
    await expect(portrait).toHaveCSS('object-fit', 'cover');
    await expect(page.locator('.portrait')).toHaveCSS('border-radius', '50%');
    const box = await portrait.boundingBox();
    expect(box!.width / box!.height).toBeCloseTo(1, 2);
    expect(box!.width).toBeLessThanOrEqual(416);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: `test-results/portrait-${width}.png` });
    await page.locator('footer').scrollIntoViewIfNeeded();
    await expect(
      page.locator('header').getByRole('link', { name: 'GitHub', exact: true }),
    ).toHaveAttribute('href', 'https://github.com/BernardoApl');
    await expect(
      page.locator('header').getByRole('link', { name: 'LinkedIn', exact: true }),
    ).toBeVisible();
    await expect(page.locator('footer')).not.toContainText('©');
    await page.screenshot({ path: `test-results/footer-${width}.png` });
  }
});
