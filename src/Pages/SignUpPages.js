class SignUpPages {
  constructor(page) {
    this.page = page;
    this.accountIcon = "//span[text()='Account']";
    this.createLink = "//a[text()='Create one']";
    this.nameField = "input[name='name']";
    this.emailField = "#txt-email";
    this.passwordField = "input[name='password']";
    this.confirmPasswordField = "input[name='password_confirmation']";
    this.captchaField = "input[name='captcha']";
    this.submitButton = "(//button[@type='submit'])[2]";
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL);
  }

  async clickAccountIcon() {
    await this.page.click(this.accountIcon);
  }

  async clickCreateAccount() {
    await this.page.click(this.createLink);
  }

  async fillSignUpForm(username, email, password, confirmPassword) {
    await this.page.fill(this.nameField, username);
    await this.page.fill(this.emailField, email);
    await this.page.fill(this.passwordField, password);
    await this.page.fill(this.confirmPasswordField, confirmPassword);
  }

  async submitForm() {
    await this.page.click(this.submitButton);
  }
}

module.exports = SignUpPages;
