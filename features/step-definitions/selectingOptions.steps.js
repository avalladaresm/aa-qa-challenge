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

const leaving = {date: '12/14/2020', time: '14:10'};

When('I set a leaving date and time', async () => {
  const dateElem = await $('input[name="LeavingDate"]');
  const timeElem = await $('input[name="LeavingTime"]');
  dateElem.setValue(leaving.date);
  timeElem.setValue(leaving.time);
})

