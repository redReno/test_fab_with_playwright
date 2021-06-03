const { chromium } = require('playwright');

(async () => {
  //let browser = await chromium.launch({headless: false, slowMo: 100});

   let browser = await chromium.connectOverCDP({
     endpointURL: 'http://localhost:9222',
     headless: false,
   });
  const context = await browser.newContext({
    viewport: {
      width: 1280, // 1280 in commit 1ee6578
      height: 720, // 720 in commit 1ee6578
    }
  })
  const page = await context.newPage();
  //const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.hover('button');
  await page.click('[data-testid=facebook]')
  browser.close()
})();
