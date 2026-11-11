import { Page, expect } from '@playwright/test'
import { step } from '../helpers/test-step-decorator'
import { BasePage } from './base-page'

export class DashboardPage extends BasePage{

    constructor(page: Page) {
        super(page)
    }

    /**
     * This method clicks on the Coffee Maker card and validates its new state
     * @param expectedState State displayed on the card after the click: `ON` or `OFF`
     */
    @step
    async toggleCoffeeMaker(expectedState: 'ON' | 'OFF') {
        const coffeeMaker = this.page.locator('nb-card', { hasText: 'Coffee Maker' })
        await coffeeMaker.click()
        await expect(coffeeMaker).toContainText(expectedState)
    }
}
