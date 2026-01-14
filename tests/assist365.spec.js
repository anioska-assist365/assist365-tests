import { test, expect } from '@playwright/test';

test('Cotización básica en Assist 365', async ({ page }) => {
  await page.goto('https://assist-365.com/ar');

  await page.getByRole('textbox', { name: '¿A dónde viajás?' }).click();
  await page.getByText('Norteamérica', { exact: true }).click();

  await page.getByText('27').click();
  await page.getByText('31', { exact: true }).click();

  //await page.getByRole('button', { name: 'Cotizar' }).click();
  // Pasajeros (PASO QUE FALTABA)
  await page.getByRole('textbox', { name: /¿cuántas personas/i }).click();
  await page.getByText('1 Adulto').click();

  // Validación simple para la demo
  await expect(page).toHaveURL(/cotizacion|quote|resultado/i);
});
