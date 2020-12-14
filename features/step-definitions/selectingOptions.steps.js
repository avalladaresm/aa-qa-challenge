const { When } = require('cucumber')

When('I select {string}', async (parking_lot) => {
    const elem = await $('#ParkingLot');
    await elem.selectByVisibleText(parking_lot);
})

When('I press the Calculate button', async () => {
    const elem = await $('input[type="submit"]');
    await elem.click();
})
