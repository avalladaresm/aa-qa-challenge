const { Then } = require('cucumber');

Then('I should see the error {string}', async (result) => {
    const elem = await $('form table tbody tr:nth-of-type(4) .SubHead b');
    await expect(elem).toHaveText(result);
})

Then('the leaving date and time should be after the entry date and time', async () => {
    const resultElem = await $('form table tbody tr:nth-of-type(4) .SubHead b');
    
    const entryDateElem = await $('input[name="StartingDate"]');
    const entryDateInput = await entryDateElem.getValue();
    const entryTimeElem = await $('input[name="StartingTime"]');
    const entryTimeInput = await entryTimeElem.getValue();
    const entryDate = new Date(entryDateInput + ' ' + entryTimeInput);

    const leavingDateElem = await $('input[name="LeavingDate"]');
    const leavingDateInput = await leavingDateElem.getValue();
    const leavingTimeElem = await $('input[name="LeavingTime"]');
    const leavingTimeInput = await leavingTimeElem.getValue();
    const leavingDate = new Date(leavingDateInput + ' ' + leavingTimeInput);

    let resultText = '';
    if (leavingDate < entryDate)
        resultText = 'ERROR! YOUR LEAVING DATE OR TIME IS BEFORE YOUR STARTING DATE OR TIME';

    await expect(resultElem).not.toHaveTextContaining(resultText);
})