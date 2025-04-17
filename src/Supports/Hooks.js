const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext(); // no video
  this.page = await this.context.newPage();       // no tracing
});

After(async function (scenario) {
  const name = scenario.pickle.name.replace(/\s+/g, '_');

  if (scenario.result.status === 'FAILED') {
    await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
  }

  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});

