const { When, Then } = require('cucumber');

When('I go the webdriver.io website', async () => {
    await browser.url('https://webdriver.io');
})

Then('I should see the website\'s title as {string}', async (title) => {
    await expect(browser).toHaveTitle(title);
})