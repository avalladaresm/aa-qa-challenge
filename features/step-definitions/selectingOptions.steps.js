const { When, Then } = require('cucumber')

When('I select {string}', async (parking_lot) => {
    const elem = await $('#ParkingLot');
    await elem.selectByVisibleText(parking_lot);
})

When('I press the Calculate button', async () => {
    const elem = await $('input[type="submit"]');
    await elem.click();
})

When('I set an entry {string} and {string}', async (entryDate, entryTime) => {
  const dateElem = await $('input[name="StartingDate"]');
  const timeElem = await $('input[name="StartingTime"]');
  dateElem.setValue(entryDate);
  timeElem.setValue(entryTime);
})

When('I set a leaving {string} and {string}', async (leavingDate, leavingTime) => {
  const dateElem = await $('input[name="LeavingDate"]');
  const timeElem = await $('input[name="LeavingTime"]');
  dateElem.setValue(leavingDate);
  timeElem.setValue(leavingTime);
})

