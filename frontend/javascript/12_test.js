const puppeteer = require('puppeteer');

async function A(num) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://github.com/brandonxiang');
  for (let i = 0; i < num - 1; i++) {
    await page.reload();
  }
  await browser.close();
}

A(1000);
