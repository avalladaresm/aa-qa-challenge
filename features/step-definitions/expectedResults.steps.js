const { Then } = require('cucumber');
/*  
*   Feature(s) using the following steps:
*   - choosingParkingLot.feature
*/
Then('I should see the error {string}', async (result) => {
    const elem = await $('form table tbody tr:nth-of-type(4) .SubHead b');
    await expect(elem).toHaveText(result);
})

/*  
*   Feature(s) using the following steps:
*   - leavingDateGreaterThanEntryDate.feature
*/
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

/*  
*   Feature(s) using the following steps:
*   - parkingRates.feature
*/
Then('I should see how much will the parking cost be $ {string}', async (cost) => {
    const costElem = await $('form table tbody tr:nth-of-type(4) .SubHead b');
    await expect(costElem).toHaveTextContaining(cost);
})