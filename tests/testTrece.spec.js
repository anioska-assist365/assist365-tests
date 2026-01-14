import { test, expect } from '@playwright/test';

test('verificar olvidar contraseñe en mi vaucher', async ({ page }) => {
  await page.goto('https://assist-365.com/ar');
  await page.locator('[id="single-spa-application:a365-navbarv2"]').getByRole('button', { name: 'Mi voucher' }).click();
  await page.getByRole('button', { name: 'Olvidé mi contraseña' }).click();
  await expect(page.getByRole('heading')).toContainText('Recuperar contraseña');
});