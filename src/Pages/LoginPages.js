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
    await this.page.goto(process.env.BASE_URL,{ waitUntil: 'networkidle' });
  }

  async loginform() {
    await this.page.waitForSelector(this.emailInput,{timeout:10000})
    await this.page.fill(this.emailInput, process.env.LOGIN_USER);
   
  }
  async pwd() {
    await this.page.waitForSelector(this.passwordInput,{timeout:10000})
    await this.page.fill(this.passwordInput, process.env.LOGIN_PASS);
  }
  async rememberme(){
    await this.page.waitForSelector(this.checkbox,{timeout:10000})
    await this.page.click(this.checkbox);
  }
  async button(){
    await this.page.waitForSelector(this.loginbutton,{timeout:10000})
  await this.page.click(this.loginbutton)
  }
  async clickAccountIcon() {
    await this.page.click(this.accountIcon);
  }

 
}
module.exports = LoginPage;