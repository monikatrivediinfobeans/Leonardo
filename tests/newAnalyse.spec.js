const { test, expect } = require('@playwright/test');
const AnalysePage = require('../pages/analyse.js');
const LoginPage = require('../pages/login.js');

let analysePage;
let loginPage;

test.beforeEach(async ({ page }) => {
    analysePage = new AnalysePage(page);
    loginPage = new LoginPage(page);

    await page.goto("https://staging.leonardo-impact.com/login");
    await loginPage.fillUsername("test@serengeti.energy");
    await loginPage.fillPassword("HEXojuMeGKS$63");
    await loginPage.clickLoginButton();
    await page.waitForTimeout(5000); 
});


test("Verify the Analyse Screen Loads Successfully", async () => {
    const isVisible = await analysePage.isAnalyseLogoVisible();
    console.log(isVisible);
    expect(isVisible).toBe(true);
    await analysePage.scrollToBottom();
    await analysePage.scrollToTop();
});

// const { test, expect } = require('@playwright/test');
// // import AnalysePage from '../pages/analyse.js'; // Correct ES Module import
// // import LoginPage from '../pages/login.js';
// const AnalysePage = require('../pages/analyse.js'); 
// const LoginPage = require('../pages/login.js');

// let analysePage;
// let loginPage;

// test.beforeEach(async({page})=>{
//     analysePage = new AnalysePage(page);
//     loginPage = new LoginPage(page);
//     await page.goto("https://staging.leonardo-impact.com/login");
//     await loginPage.fillUsername("test@serengeti.energy");
//     await loginPage.fillPassword("HEXojuMeGKS$63");
//     await loginPage.clickLoginButton();
//     await page.waitForTimeout(5000);
// });




// test("Verify the Analyse Screen Loads Successfully", async ({ page }) => {
//     console.log(await analysePage.isAnalyseLogoVisible());
//     expect(await analysePage.isAnalyseLogoVisible()).toBe(true);
//     await analysePage.scrollToBottom();
//     await analysePage.scrollToTop();
// }
// );

// test("Verify that the map is visible on the Analyse screen", async ({ page }) => {
//     console.log(await analysePage.isAnalyseLogoVisible());
//     expect(await analysePage.isAnalyseLogoVisible()).toBe(true);
//     await analysePage.navigate();
//     await analysePage.clickFirstMarker();
// }

// );