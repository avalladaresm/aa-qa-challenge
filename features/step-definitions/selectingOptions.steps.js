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

When('I set a leaving date {string}', async (leavingDate) => {
  const dateElem = await $('input[name="LeavingDate"]');
  dateElem.setValue(leavingDate);
  assert.match(leavingDate, dateRegex);
})

const timeRegex = RegExp(/^((([0-1])?([0-9])|20|21|22|23):([0-5])([0-9]))$/, 'g');

When('I set an entry time {string}', async (entryTime) => {
  const timeElem = await $('input[name="StartingTime"]');
  timeElem.setValue(entryTime);
  assert.match(entryTime, timeRegex);
})

When('I set a leaving time {string}', async (leavingTime) => {
  const timeElem = await $('input[name="LeavingTime"]');
  timeElem.setValue(leavingTime);
  assert.match(leavingTime, timeRegex);
})

When('I set an entry {string} and {string} {string}', async (entryDate, entryTime, entryAMPM) => {
  const dateElem = await $('input[name="StartingDate"]');
  const timeElem = await $('input[name="StartingTime"]');
  const ampmElem = await $(`input[value=${entryAMPM}]`);
  await ampmElem.click();
  dateElem.setValue(entryDate);
  timeElem.setValue(entryTime);
})

When('I set a leaving {string} and {string} {string}', async (leavingDate, leavingTime, leavingAMPM) => {
  const dateElem = await $('input[name="LeavingDate"]');
  const timeElem = await $('input[name="LeavingTime"]');
  const ampmElem = await $(`input[value=${leavingAMPM}]`);
  await ampmElem.click();
  dateElem.setValue(leavingDate);
  timeElem.setValue(leavingTime);
})