class AnalysePage {
  constructor(page) {
    this.page = page;

    // Selector for the Analyse logo
    this.analyseLogo = "//div[@class='inline-block text-headline-medium float-left']";

    // Use XPath for the map container element 
    this.mapElement = this.page.locator("(//*[text()='To navigate, press the arrow keys.']//parent::div//parent::div//parent::div)[1]");

    // Define the filter bar selector – adjust the XPath as needed.
    this.filterbar = "//span[text() = 'Filter']";

    // Define the indicators– adjust the XPath as needed.
    this.indicators =  "//div[@class = 'flex flex-col mt-2']";
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

  async isFilterbarVisible() {
    // Convert to a locator each time you use it
    await this.mapElement.waitFor({ state: 'visible', timeout: 60000 });    
    return await this.page.locator(this.filterbar).isVisible();
  }    

   
  async isIndicatorsVisible() {
    // Convert to a locator each time you use it
    await this.mapElement.waitFor({ state: 'visible', timeout: 60000 });    
    return await this.page.locator(this.indicators).isVisible();
  }
}


module.exports = AnalysePage;