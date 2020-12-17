const { Given } = require('cucumber');

/*  
*   Feature(s) using the following steps:
*   - choosingParkingLot.feature
*   - dateFormat.feature
*   - leavingDatesGreatThanEntryDate.feature
*   - parkingRates.feature
*/
Given('I go to the website', async () => {
    await browser.url('http://www.shino.de/parkcalc/');
})