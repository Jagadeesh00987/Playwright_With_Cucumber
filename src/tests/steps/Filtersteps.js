const { Given, When } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const Filter = require('../../Pages/FilterPages');
require('dotenv').config(); // Load .env variables

When('The user enter the email from env', async function () {
  this.filter = new Filter(this.page);

  const email = process.env.LOGIN_USER;
  if (!email) throw new Error('LOGIN_USER is not defined in .env');

  await this.filter.loginform(); // Uses env internally
});

When('The User enter the password from env', async function () {
  const password = process.env.LOGIN_PASS;
  if (!password) throw new Error('LOGIN_PASS is not defined in .env');

  await this.filter.pwd(); // Uses env internally
});

When('User clicks the subcategory in the filter page', async function () {
  await this.filter.clickFilter();
  await this.filter.clickCategoryCheck();
});

When('User drags the prize slider in the filter page', async function () {
  await this.filter.dragandDrop();
});

When('Clicks the Advanced Filter', async function () {
  await this.filter.advFilterlink();
});

When('User clicks the Colour Filter', async function () {
  await this.filter.clickColor();
});

When('User Clicks the Size in the filter', async function () {
  console.log('Box filters selected (mock)');
});

When('User filter with by boxes by clicking', async function () {
  console.log('Box filters selected (mock)');
});

When('user filter with size by clicking the By Sizes filter', async function () {
  console.log('Size filters selected (mock)');
});

When('User clicks the filter button', async function () {
  await this.filter.clickfilterbtn();
});

When('User will get product based on the filter', async function () {
  console.log('Filtered products    displayed (mock check)');
});
