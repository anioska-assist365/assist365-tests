// @ts-check
import { test, expect } from '@playwright/test';

test('Abrir Google y validar el título', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});
