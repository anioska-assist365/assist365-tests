import { test, expect } from '@playwright/test';

test('Cotización completa Assist 365 - 1 adulto', async ({ page }) => {
  await page.goto('https://assist-365.com/ar');
  await page.getByRole('textbox', { name: '¿A dónde viajás?' }).click();
  await page.getByText('Norteamérica', { exact: true }).click();
  await page.getByText('26', { exact: true }).click();
  await page.getByText('30', { exact: true }).click();
  await page.getByRole('textbox', { name: '¿Cuántas personas?' }).click();
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(3).click();
  await page.getByRole('button', { name: 'Cotizar' }).click();
});