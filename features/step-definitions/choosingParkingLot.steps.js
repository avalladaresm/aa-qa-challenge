const { Given, When, Then } = require('cucumber');

Given('I go the website', async () => {
    await browser.url('http://www.shino.de/parkcalc/');
})

When('I select {string}', async (parking_lot) => {
    const elem = await $('#ParkingLot');
    await elem.selectByVisibleText(parking_lot);
})

When('I press the Calculate button', async () => {
    const elem = await $('input[type="submit"]');
    await elem.click();
})

Then('I should see the error {string}', async (result) => {
    const elem = await $('form table tbody tr:nth-of-type(4) .SubHead b');
    await expect(elem).toHaveText(result);
})