class LoginPage {
  constructor(page) {
    this.page = page;
    this.accountIcon = "//span[text()='Account']";
    this.emailInput = "//input[@placeholder='Email*']";
    this.passwordInput = "//input[@placeholder='Your password*']";
    this.checkbox = "//label[@for='remember-checkbox']";
    this.loginbutton="(//button[@type='submit'])[2]";
   
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL);
  }

  async loginform(email) {
    await this.page.fill(this.emailInput, email);
   
   
  }
  async pwd(password) {
    
    await this.page.fill(this.passwordInput, password);
   
  }
  async rememberme(){
    await this.page.click(this.checkbox);
    

  }
  async button(){
  await this.page.click(this.loginbutton)

  }
  async clickAccountIcon() {
    await this.page.click(this.accountIcon);
  }

 
}
module.exports = LoginPage;