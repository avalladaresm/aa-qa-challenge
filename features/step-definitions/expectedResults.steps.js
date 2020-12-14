const { Then } = require('cucumber');

Then('I should see the error {string}', async (result) => {
    const elem = await $('form table tbody tr:nth-of-type(4) .SubHead b');
    await expect(elem).toHaveText(result);
})

Then('the leaving date and time should be after the entry date and time', async () => {
    const elem = await $('form table tbody tr:nth-of-type(4) .SubHead b');
    await expect(elem).not.toHaveText('ERROR! YOUR LEAVING DATE OR TIME IS BEFORE YOUR STARTING DATE OR TIME');
})