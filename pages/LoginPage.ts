// these are for writing all business logic related to login page

import { Page } from "playwright";
import { users } from '../data/users';

export class LoginPage {
    baseUrl: string | undefined;
    usernameInput: import("playwright-core").Locator;
    passwordInput: import("playwright-core").Locator;
    loginButton: import("playwright-core").Locator;

    constructor(private page: Page){
        this.page = page;
        this.baseUrl = process.env.BASE_URL;

        //locators
        this.usernameInput = this.page.getByPlaceholder('Username');
        this.passwordInput = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', {name: 'Login'});
    }

    async open(){
        if (!this.baseUrl) {
            throw new Error("BASE_URL environment variable is not set");
        }
        await this.page.goto(this.baseUrl);
    }

    async Login(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

module.exports = { LoginPage };