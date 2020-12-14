const { When, Then } = require('cucumber')

When('I select {string}', async (parking_lot) => {
    const elem = await $('#ParkingLot');
    await elem.selectByVisibleText(parking_lot);
})

When('I press the Calculate button', async () => {
    const elem = await $('input[type="submit"]');
    await elem.click();
})

const entry = {date: '12/15/2020', time: '12:10'};

When('I set an entry date and time', async () => {
  const dateElem = await $('input[name="StartingDate"]');
  const timeElem = await $('input[name="StartingTime"]');
  dateElem.setValue(entry.date);
  timeElem.setValue(entry.time);
})

const leaving = {date: '12/17/2020', time: '14:10'};

When('I set a leaving date and time', async () => {
  const dateElem = await $('input[name="LeavingDate"]');
  const timeElem = await $('input[name="LeavingTime"]');
  dateElem.setValue(leaving.date);
  timeElem.setValue(leaving.time);
})

Then('the leaving date and time should be after the entry date and time', async () => {
    const elem = await $('form table tbody tr:nth-of-type(4) .SubHead b');
    await expect(elem).not.toHaveText('ERROR! YOUR LEAVING DATE OR TIME IS BEFORE YOUR STARTING DATE OR TIME');
})