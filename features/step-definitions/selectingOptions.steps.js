const { When } = require('cucumber')
let assert = require('assert');

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

const dateRegex = RegExp(/^((0?[1-9]|1[0-2])(\/)(0?[1-9]|[12]\d|30|31)(\/)(20)([0-9])([0-9]))$/, 'g');

When('I set an entry date {string}', async (entryDate) => {
  const dateElem = await $('input[name="StartingDate"]');
  dateElem.setValue(entryDate);
  assert.match(entryDate, dateRegex);
})
