const { Then } = require('cucumber');

Then('I should see the error {string}', async (result) => {
    const elem = await $('form table tbody tr:nth-of-type(4) .SubHead b');
    await expect(elem).toHaveText(result);
})