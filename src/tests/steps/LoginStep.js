
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('C:/Users/jagadeesh/Desktop/PLaywrightPractice/src/Pages/LoginPages.js');
require('dotenv').config();


Given('User navigated to the login page of the application', async function () {
  this.loginPageform = new LoginPage(this.page);
  await this.loginPageform.goto();
});

When('The user click the Account icon for the login', async function () {
  await this.loginPageform.clickAccountIcon();
});

When('User click the remember me checkbox', async function () {
await this.loginPageform.rememberme();
});

When('User clicks the submit button', async function () {
await this.loginPageform.button();
});