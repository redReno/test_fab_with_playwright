const { chromium } = require('playwright');

(async () => {
  /*  comment the row below and de-comment the ones below
      to run the test using an existing browser context
  */
  let browser = await chromium.launch({headless: false, slowMo: 100});

  const context = await browser.newContext({
    viewport: {
      width: 1280, // 1280 in commit 1ee6578
      height: 720, // 720 in commit 1ee6578
    }
  })
  const page = await context.newPage();
  await page.goto('http://localhost:3000');
  await page.hover('button');
  await page.click('[data-testid=facebook]')
  browser.close()

  // needs a running browser to work
  // use --remote-debugging-port=9222
  // if using --headless the test will pass, otherwise not

  let browserCDP = await chromium.connectOverCDP({
    endpointURL: 'http://localhost:9222',
    headless: false,
    slowMo: 100
  });
  const contextCDP = await browserCDP.newContext({
    viewport: {
      width: 1280, // 1280 in commit 1ee6578
      height: 720, // 720 in commit 1ee6578
    }
  })
  const pageCDP = await contextCDP.newPage();
  await pageCDP.goto('http://localhost:3000');
  await pageCDP.hover('button');
  await pageCDP.click('[data-testid=facebook]')
  browserCDP.close()
})();
