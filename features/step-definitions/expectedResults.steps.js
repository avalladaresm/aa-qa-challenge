const { Then } = require('cucumber');
let assert = require('assert');

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
    const entryDate = new Date(entryDateInput.concat(' ', entryTimeInput));
    
    const leavingDateElem = await $('input[name="LeavingDate"]');
    const leavingDateInput = await leavingDateElem.getValue();
    const leavingTimeElem = await $('input[name="LeavingTime"]');
    const leavingTimeInput = await leavingTimeElem.getValue();
    const leavingDate = new Date(leavingDateInput.concat(' ', leavingTimeInput));
    
    let resultText = '';
    let resultElemTotalTimeElemExists = false;
    if (leavingDate < entryDate) {
        const resultElemTotalTimeElem = await $('form table tbody tr:nth-of-type(4) td:nth-of-type(2) .BodyCopy b');
        const resultElemTotalTimeElemText = resultElemTotalTimeElem && resultElemTotalTimeElem.error ? undefined : await resultElemTotalTimeElem.getText();
        resultElemTotalTimeElemExists = resultElemTotalTimeElem && await resultElemTotalTimeElem.isExisting();
        if(resultElemTotalTimeElemExists && (resultElemTotalTimeElemText && resultElemTotalTimeElemText.includes('-'))) {
            resultText = '-';
            await expect(resultElemTotalTimeElem).not.toHaveTextContaining(resultText);
        }
        else {
            resultText = 'ERROR! YOUR LEAVING DATE OR TIME IS BEFORE YOUR STARTING DATE OR TIME';
            await expect(resultElem).not.toHaveTextContaining(resultText);
        }
    }

})

Then('I should see a warning saying the date or time format I entered is incorrect', async () => {
    const entryDateElem = await $('input[name="StartingDate"]');
    const entryDateInput = await entryDateElem.getValue();
    const entryTimeElem = await $('input[name="StartingTime"]');
    const entryTimeInput = await entryTimeElem.getValue();

    const leavingDateElem = await $('input[name="LeavingDate"]');
    const leavingDateInput = await leavingDateElem.getValue();
    const leavingTimeElem = await $('input[name="LeavingTime"]');
    const leavingTimeInput = await leavingTimeElem.getValue();

    const dateRegex = RegExp(/^((0?[1-9]|1[0-2])(\/)(0?[1-9]|[12]\d|30|31)(\/)(20)([0-9])([0-9]))$/, 'g');
    //const timeReges = RegExp(//, 'g');

    assert.match(entryDateInput, dateRegex);
    assert.match(leavingDateInput, dateRegex);
    //assert.match(entryTimeInput, dateRegex);
    //assert.match(leavingTimeInput, dateRegex);
})