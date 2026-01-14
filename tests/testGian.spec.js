import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://assist-365.com/ar');
  await page.getByRole('textbox', { name: '¿A dónde viajás?' }).click();
  await page.getByText('África').click();
  await page.locator('div').filter({ hasText: /^Fecha de salida$/ }).click();
  await page.getByText('27').click();
  await page.getByText('30', { exact: true }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(5).click();
  await page.getByRole('button', { name: 'Cotizar' }).click();
  await page.getByRole('heading', { name: 'Elige el plan que se ajuste a' }).click();
});