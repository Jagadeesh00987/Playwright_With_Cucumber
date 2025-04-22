const { Given, And, Then, When } = require('@cucumber/cucumber')
const { expect } = require('@playwright/test')
const SearchproductsHome = require('C:/Users/jagadeesh/Desktop/PLaywrightPractice/src/Pages/SearchFun.js')

When(
  'User Select certain category to search for the product',
  async function () {
    this.search = new SearchproductsHome(this.page)
    await this.search.clickDropdown('Women')
    console.log('Clicked')
    //await this.search.allOptionsAndClick('Traditional Wear');
  }
)

When('User enter a search keyword to find a product', async function () {
  await this.search.searchproducts('cloths')
})

When('User clicks the search button', async function () {
  console.log('Product Searched Successful')
})
