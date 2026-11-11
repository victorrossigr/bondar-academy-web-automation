import { test } from '../fixtures';

test.describe('Dashboard page', () => {

    test('Coffe maker', async ({ pom }) => {
        await pom.dashboardPage.toggleCoffeeMaker('OFF')
        await pom.dashboardPage.toggleCoffeeMaker('ON')
    })

})
