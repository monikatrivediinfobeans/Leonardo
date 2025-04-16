const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login');
const AnalysePage = require('../pages/analyse');

test.describe('Analyse Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Increase default test timeout if needed
    test.setTimeout(60000);

    // Initialize the LoginPage
    const loginPage = new LoginPage(page);

    // Go to the login page and log in
    await page.goto('https://staging.leonardo-impact.com/login');
    await loginPage.fillUsername('test@serengeti.energy');
    await loginPage.fillPassword('HEXojuMeGKS$63');
    await loginPage.clickLoginButton();

    // Wait for the site to load after login (adjust load state as needed)
    await page.waitForLoadState('networkidle');
  });

  test('Verify the Analyse Screen Loads Successfully', async ({ page }) => {
    // If the login flow does NOT automatically land on the Analyse page, uncomment:
    // const analysePage = new AnalysePage(page);
    // await analysePage.navigate();

    const analysePage = new AnalysePage(page);

    const isVisible = await analysePage.isAnalyseLogoVisible();
    console.log('Analyse logo visible:', isVisible);
    expect(isVisible).toBe(true);

    await analysePage.scrollToBottom();
    await analysePage.scrollToTop();
  });

  test('Verify that the map is visible on the Analyse screen', async ({ page }) => {
    const analysePage = new AnalysePage(page);
    const isVisible = await analysePage.isMapVisible();
    console.log('Map is visible:', isVisible);
    expect(isVisible).toBe(true);
  });


  test('Verify that the filter bar is displayed', async ({ page }) => {
    const analysePage = new AnalysePage(page);
    const isVisible = await analysePage.isFilterbarVisible();
    console.log('Filter bar is visible:', isVisible);
    expect(isVisible).toBe(true);
  });

  test('Verify that indicators are displayed correctly', async ({ page }) => {
    const analysePage = new AnalysePage(page);
    const isVisible = await analysePage.isIndicatorsVisible();
    console.log('Indicators are displayed correctly:', isVisible);
    expect(isVisible).toBe(true);
  });

  test('Verify download report', async ({ page }) => {
    const analysePage = new AnalysePage(page);
    const isVisible = await analysePage.isDownloadExportVisible();
    console.log('Download Export button displayed correctly:', isVisible);
    expect(isVisible).toBe(true);
  });
  
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