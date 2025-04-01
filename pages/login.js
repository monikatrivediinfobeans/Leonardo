class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = "//input[@placeholder='Email']";
    this.passwordInput = "//input[@placeholder='Password']";
    this.loginButton = "//button[@type='submit']";
  }

  async fillUsername(username) {
    // Using .locator(...).fill(...) is more robust than page.type(...)
    await this.page.locator(this.usernameInput).fill(username);
  }

  async fillPassword(password) {
    await this.page.locator(this.passwordInput).fill(password);
  }

  async clickLoginButton() {
    await this.page.locator(this.loginButton).click();
  }
}

module.exports = LoginPage;
