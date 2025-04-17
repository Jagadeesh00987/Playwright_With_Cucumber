class Search {
    constructor(page) {
      this.page = page;
  
      // Selectors
     this.selectors={
        selectDrop:"select[name='categories[]']",
        optionsCloth:"//select[@name='categories[]']/descendant::option[text()='Women']",
        allCategories:"//select[@class='product-category-select']//descendant::option",
        searchProduct:"(//input[@class='input-search-product'])[1]"

     }
    }

async clickDropdown(value){
    await this.page.click(this.selectors.selectDrop)
    //await this.page.selectOption(this.selectors.selectDrop, { label: value });
    
    //await this.page.keyboard.press('ArrowDown');
    //await this.page.keyboard.press('Enter')
    //await this.page.hover(this.selectors.optionsCloth)
    //await this.page.click(this.selectors.optionsCloth)
 
}
async allOptionsAndClick(targetOption) {
    const dropdownOptions = await this.page.locator(this.selectors.allCategories).allTextContents();
    console.log("Dropdown values:", dropdownOptions);
    for (const option of dropdownOptions) {

        const text = (await option.textContent())?.trim();

        console.log("Dropdown values:", option);

      if (text === targetOption) {

        console.log("Dropdown values:", option);
        await option.click();
        
        return;
      }
    }
  
    throw new Error(` Option "${targetOption}" not found in dropdown`);
  }
  
async searchproducts(keyword){
    await this.page.waitForSelector(this.selectors.searchProduct,{timeout:10000})
    await this.page.fill(this.selectors.searchProduct, keyword)
    await this.page.keyboard.press('Enter')
}



}
module.exports=Search;