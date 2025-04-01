class AnalysePage {
  constructor(page) {
    this.page = page;

    // Selector for the Analyse logo
    this.analyseLogo = "//div[@class='inline-block text-headline-medium float-left']";

    // Use a more specific selector for the map iframe if possible.
    // For example: page.frameLocator('iframe[src*="maps.google.com"]');
    // this.iframeLocator = page.frameLocator('iframe');

    // Use XPath for the map container element within the iframe
    this.mapElement = this.page.locator("(//*[text()='To navigate, press the arrow keys.']//parent::div//parent::div//parent::div)[1]");

    // Use XPath to select the first marker (adjust the XPath if needed)
    // this.marker = this.iframeLocator.locator('xpath=(//div[@aria-label="Marker"])[1]');
    this.filterbar = "//div[@class ='pl-5']"
  }

  async isAnalyseLogoVisible() {
    await this.page.locator(this.analyseLogo).waitFor({ state: 'visible', timeout: 60000 });
    return this.page.locator(this.analyseLogo).isVisible();
  }

  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async scrollToTop() {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }

  async navigate() {
    // Navigate directly to the Analyse page
    await this.page.goto('https://staging.leonardo-impact.com/analyse');
    await this.page.waitForLoadState('networkidle');
  }

  //*[text()='To navigate, press the arrow keys.']//parent::div//parent::div//parent::div)[1]

    async isMapVisible() {
      // Wait for the map element inside the iframe to be visible
      await this.mapElement.waitFor({ state: 'visible', timeout: 60000 });
      return await this.mapElement.isVisible();
    }
//   async clickFirstMarker() {
//     if (await this.isMapVisible()) {
//       console.log("Map is visible. Proceeding with interactions.");
//       if (await this.marker.isVisible()) {
//         await this.marker.click();
//         console.log("Clicked on the marker.");
//       } else {
//         console.log("No visible markers found.");
//       }
//     } else {
//       console.log("Map is not visible.");
//     }
//   }
}

module.exports = AnalysePage;