class ProductPages {
    constructor(page) {
      this.page = page;
  
      // Selectors
      this.selectors = {
        toaster:"//span[@class='btn-close']",
        productLink: "//a[@class='active'][normalize-space()='Product']",
        productName: "//a[text()='Women Pretty Pink Solid Top']",
        productPrice: "//*[@id='main-section']/div[2]/div/div/div[2]/div[3]/div[1]/div/div[2]/div[2]/div[1]/span[1]",
        addToCartButton: "(//a[contains(@class,'action-btn add-to-cart-button')])[1]",
        cartIcon: "//span[normalize-space(text())='Cart']" ,
        cartToaster:"//div[contains(@class, 'alert') and contains(@class, 'alert-danger') and contains(normalize-space(), 'Product Women Pretty Pink Solid Top is out of stock!')]"
      };
    }
  
    async goToProductPage() {
        await this.page.click(this.selectors.toaster);
        await this.page.waitForSelector(this.selectors.productLink, {timeout:5000});
        await this.page.hover(this.selectors.productLink)
        await this.page.click(this.selectors.productLink)
     
    }
    
    async getProductText() {
      return await this.page.textContent(this.selectors.productName);
    }
  
    async getProductPrice() {
      return await this.page.textContent(this.selectors.productPrice);
    }
  
    async addToCart() {
      await this.page.waitForSelector(this.selectors.addToCartButton, {timeout:10000});
      await this.page.hover(this.selectors.addToCartButton);
      await this.page.click(this.selectors.addToCartButton);
      return await this.page.textContent(this.selectors.cartToaster)

    }
  
    async goToCheckout() {
        await this.page.waitForSelector(this.selectors.cartIcon, {timeout:9000});
      await this.page.click(this.selectors.cartIcon);
    }
  }
  
  module.exports = ProductPages;
  