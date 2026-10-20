import { test, expect } from '@playwright/test';

//test case - 1 Login scenario
test('user can login with valid credentials @smokesmoke --', async ({ page }) => {
  await page.goto('https://saucedemo.com');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', {name: 'Login'}).click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await expect(page.locator('.title')).toHaveText('Products');
});
