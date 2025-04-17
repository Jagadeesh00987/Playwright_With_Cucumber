const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const SignUp = require('C:/Users/jagadeesh/Desktop/PLaywrightPractice/src/Pages/SignUpPages.js');



Given('User SignUp with the Application', async function () {
this.signup=new SignUp(this.page);
await this.signup.goto();
});


When('The user click the Account icon', async function () {
await this.signup.clickAccountIcon();
});

When('The user clicks the Create Account Link', async function () {
  await this.signup.clickCreateAccount();
});


When('The user enters the username {string} , email {string}, password {string},confirmPassword {string}', async function (username, email, password, confirmPassword) {
  await this.signup.fillSignUpForm(username,email,password,confirmPassword)
});


When('The User clicks the Sumbit button', async function () {
await this.signup.submitForm();
});




