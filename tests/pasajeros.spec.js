import { test } from '@playwright/test';

test('Explorar selector de pasajeros', async ({ page }) => {
  await page.goto('https://assist-365.com/ar');

  // Esperamos que cargue bien la home
  await page.waitForLoadState('networkidle');

  // Click en el input de pasajeros
  await page.getByRole('textbox', { name: /¿cuántas personas/i }).click();

  // Pausa para inspeccionar manualmente
  await page.pause();
});
