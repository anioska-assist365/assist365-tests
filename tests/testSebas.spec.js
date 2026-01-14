import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://assist-365.com/ar');
  await page.getByRole('textbox', { name: '¿A dónde viajás?' }).click();
  await page.getByText('Europa', { exact: true }).click();
  await page.getByText('26', { exact: true }).click();
  await page.getByText('31', { exact: true }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: 'Cotizar' }).click();
  await page.getByRole('button', { name: 'Seleccionar' }).nth(1).click();
  await page.getByRole('heading', { name: 'Completá los datos de los' }).click();
  await expect(page.locator('h2')).toContainText('Completá los datos de los pasajeros');
});