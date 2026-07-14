import { test, expect } from '@playwright/test';

test('debe iniciar sesión correctamente', async ({ page }) => {

  await page.goto('/login');

  await page.locator('input[type="text"]').fill('admin');
  await page.locator('input[type="password"]').fill('1234');

  await page.getByRole('button', {
    name: /ingresar/i
  }).click();

  await expect(page).toHaveURL(/productos/);

});