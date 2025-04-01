
class LoginPage  {

    constructor(page) {
      this.page = page;
      this.usernameInput = "//input[@placeholder = 'Email']";
      this.passwordInput = "//input[@placeholder = 'Password']";
      this.loginButton = "//button[@type = 'submit']";
    }
  
  
    async fillUsername(username) {
  
        await this.page.type( this.usernameInput, username)
      
    }
  
    async fillPassword(password) {
        await this.page.type(this.passwordInput, password);
      
    }
  
    async clickLoginButton() {
       await this.page.click(this.loginButton);
      }
    }
  
  export default LoginPage;