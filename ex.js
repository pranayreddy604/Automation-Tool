const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  page.on('dialog', async (dialog) => {
    await dialog.accept();
  });

  await page.goto('https://us04web.zoom.us/join');
  await page.screenshot({ path: 'example.png' });
  
  await page.type('#join-confno', '123 456 7890', { delay: 100 });
  await page.click('#btnSubmit');
})();