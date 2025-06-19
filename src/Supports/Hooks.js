const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

Before(async function () {
  this.browser = await chromium.launch({ headless: false });

  // Create videos folder if it doesn't exist
  const videoDir = path.resolve('videos');
  if (!fs.existsSync(videoDir)) {
    fs.mkdirSync(videoDir);
  }

  this.context = await this.browser.newContext({
    recordVideo: {
      dir: videoDir
      // No size — uses default viewport size
    }
  });

  this.page = await this.context.newPage();
});

After(async function (scenario) {
  const name = scenario.pickle.name.replace(/\s+/g, '_');
  const video = this.page.video();
  const videoPath = video ? await video.path() : null;

  if (scenario.result.status === 'FAILED') {
    // Capture screenshot
    await this.page.screenshot({
      path: `screenshots/${name}.png`,
      fullPage: true
    });

    // Rename the video
    if (videoPath) {
      const newVideoPath = path.resolve(`videos/${name}.webm`);
      fs.renameSync(videoPath, newVideoPath);
    }
  } else {
    // Delete video if test passed
    if (videoPath && fs.existsSync(videoPath)) {
      fs.unlinkSync(videoPath);
    }
  }

  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});

