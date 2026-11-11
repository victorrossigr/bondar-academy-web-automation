import { Page, expect } from '@playwright/test'
import { step } from '../helpers/test-step-decorator'
import { BasePage } from './base-page'

export class FormLayoutsPage extends BasePage{

    constructor(page: Page) {
        super(page)
    }

    /**
     * This method submits the inline form with user full name, email and can select the remember me checkbox
     * @param fullName Valid test user full name (first and last name)
     * @param email Valid test user email `example@email.com`
     * @param rememberMeCheck Pass `true` to check remember me checkbox
     */
    @step
    async submitInlineForm(fullName: string, email: string, rememberMeCheck: boolean) {
        const inlineFormSection = this.page.locator('nb-card', { hasText: 'Inline form' })
        await inlineFormSection.getByPlaceholder('Jane Doe').fill(fullName)
        await inlineFormSection.getByPlaceholder('Email').fill(email)
        if (rememberMeCheck) {
            await inlineFormSection.getByRole('checkbox', { name: 'Remember me' }).check({ force: true })
        }
        await inlineFormSection.getByRole('button').click()
    }

    /**
     * This method submits using the grid form with user email, password and select one of the options
     * @param email Valid test user email `example@test.com`
     * @param password Valid test user password
     * @param optionText Pass the exact text of the option in the page
     */
    @step
    async submitUsingTheGrid(email: string, password: string, optionText: string) {
        const usingGridSection = this.page.locator('nb-card').filter({ hasText: 'Using the Grid' })

        await usingGridSection.getByPlaceholder('Email').fill(email)
        await expect(usingGridSection.getByPlaceholder('Email')).toHaveValue(email)

        await usingGridSection.getByPlaceholder('Password').fill(password)
        await expect(usingGridSection.getByPlaceholder('Password')).toHaveValue(password)

        await usingGridSection.getByText(optionText).click({ force: true })
        await expect(usingGridSection.getByText(optionText)).toBeChecked()

        await usingGridSection.getByRole('button').click()
        // expect(usingGridSection.locator('form')).toHaveClass(/ng-submitted/)
    }
}