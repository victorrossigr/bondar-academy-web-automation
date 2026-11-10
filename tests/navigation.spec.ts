import { test } from '../fixtures';

test.describe('Navigation menu', () => {

    test('Navigating to every page', async ({ pom }) => {
        await pom.navigateTo.formLayoutsPage()
        await pom.navigateTo.datePickerPage()
        await pom.navigateTo.dialogPage()
        await pom.navigateTo.smartTablePage()
    })

})
