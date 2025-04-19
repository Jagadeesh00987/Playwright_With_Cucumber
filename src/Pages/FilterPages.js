class Filter {
    constructor(page) {
      this.page = page;
      this.selectors = {
        accountIcon: "//span[text()='Account']",
        emailInput: "//input[@placeholder='Email*']",
        passwordInput: "//input[@placeholder='Your password*']",
        clickFilter: "//a[@class='shop-filter-toggle']",
        clickCategory: "//span[text()='Traditional Wear']",
        dragPrice: ".ui-slider-handle",
        advFilter: "//span[normalize-space(text())='Advanced filters']",
        color: "//li[contains(@title,'Light Blue')]//span",
        largeSize: "//label[.//span[contains(text(), 'Large')]]//input[@type='checkbox']",
        filterbtn: "//button[contains(@class,'btn btn-sm')]"
      };
    }
  
    async loginform() {
      await this.page.fill(this.selectors.emailInput, process.env.LOGIN_USER);
    }
  
    async pwd() {
      await this.page.fill(this.selectors.passwordInput, process.env.LOGIN_PASS);
    }
  
    async clickFilter() {
      await this.page.click(this.selectors.clickFilter);
    }
  
    async clickCategoryCheck() {
      await this.page.click(this.selectors.clickCategory);
    }
  
    async advFilterlink() {
      await this.page.click(this.selectors.advFilter);
    }
  
    async clickColor() {
      await this.page.click(this.selectors.color);
    }
  
    async clicklarge() {
      await this.page.click(this.selectors.largeSize);
    }
  
    async clickfilterbtn() {
      await this.page.click(this.selectors.filterbtn);
    }
  
    async dragandDrop() {
      const handles = await this.page.$$(this.selectors.dragPrice);
      const box = await handles[0].boundingBox();
      await this.page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await this.page.mouse.down();
      await this.page.mouse.move(box.x + 50, box.y);
      await this.page.mouse.up();
  
      const rightBox = await handles[1].boundingBox();
      await this.page.mouse.move(rightBox.x + rightBox.width / 2, rightBox.y + rightBox.height / 2);
      await this.page.mouse.down();
      await this.page.mouse.move(rightBox.x - 30, rightBox.y);
      await this.page.mouse.up();
    }
  }
  module.exports=Filter;