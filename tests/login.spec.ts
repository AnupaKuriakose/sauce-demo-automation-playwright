import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

import { constants } from '../data/constants';
import { users } from '../data/users';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.open();
})
//test case - 1 Login scenario
test('user can login with valid credentials @smoke--', async ({ page }) => {
  await loginPage.Login(users.standaredUser.username, users.standaredUser.password)
  await expect(page).toHaveURL(constants.urls.inventory);
  await expect(page.locator('.title')).toHaveText(constants.text.productTile);
});
