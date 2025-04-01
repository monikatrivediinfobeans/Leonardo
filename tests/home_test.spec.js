const { test, expect } = require('@playwright/test');
import LoginPage from '../pages/login.js'; // Correct ES Module import


test.only("Login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto("https://staging.leonardo-impact.com/login");
    await loginPage.fillUsername("test@serengeti.energy");
    await loginPage.fillPassword("HEXojuMeGKS$63");
    await loginPage.clickLoginButton();
});