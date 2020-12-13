const { Given } = require('cucumber');

Given('I go to the website', async () => {
    await browser.url('http://www.shino.de/parkcalc/');
})