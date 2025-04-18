
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('C:/Users/jagadeesh/Desktop/PLaywrightPractice/src/Pages/LoginPages.js');
require('dotenv').config();

Given('User is logged into the application', async function () {
  this.loginPageform = new LoginPage(this.page);
  await this.loginPageform.goto();
  await this.loginPageform.clickAccountIcon();
  await this.loginPageform.loginform();
  await this.loginPageform.pwd();
  await this.loginPageform.rememberme();
  await this.loginPageform.button();
});
