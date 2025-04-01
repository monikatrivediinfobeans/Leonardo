const { test, expect } = require('@playwright/test');
import LoginPage from '../pages/login.js'; // Correct ES Module import


test("Verify user login wih invalid credentials ", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto("https://staging.leonardo-impact.com/login");
    await loginPage.fillUsername("test@seengeti.energy");
    await loginPage.fillPassword("HEXojuMeGKS$63");
    await loginPage.clickLoginButton();
});

test("Verify user login wih blank credentials ", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto("https://staging.leonardo-impact.com/login");
    await loginPage.fillUsername("");
    await loginPage.fillPassword("");
    await loginPage.clickLoginButton();
});

test("Verify user should be abale to login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto("https://staging.leonardo-impact.com/login");
    await loginPage.fillUsername("test@serengeti.energy");
    await loginPage.fillPassword("HEXojuMeGKS$63");
    await loginPage.clickLoginButton();
});