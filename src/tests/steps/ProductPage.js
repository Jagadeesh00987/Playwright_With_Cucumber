const { When } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const ProductPage = require("C:/Users/jagadeesh/Desktop/PLaywrightPractice/src/Pages/ProductPages.js");

When('User clicks the product page and navigate to the product page', async function () {
  this.product = new ProductPage(this.page);
  await this.product.goToProductPage();
});

When('Check the avaialbe quantity of the product', async function () {
  const productText = await this.product.getProductText();
  console.log("Product Name:", productText);
  await expect(productText.trim()).toEqual("Women Pretty Pink Solid Top");

  const productPrice = await this.product.getProductPrice();
  
});

When('User add the product to the cart', async function () {
  const toastertext=await this.product.addToCart();
  expect.soft(toastertext).toContain("Product Women Pretty Pink Solid Top is out of stock!")
  console.log(toastertext)
});

When('Proceed to the checkout', async function () {
  await this.product.goToCheckout();
});
