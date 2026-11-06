import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test('Coffe maker', async ({ page }) => {
    await page.locator('nb-card', { hasText: 'Coffee Maker' }).click()
    await expect(page.locator('nb-card', { hasText: 'Coffee Maker' })).toContainText('OFF')
    await page.locator('nb-card', { hasText: 'Coffee Maker' }).click()
    await expect(page.locator('nb-card', { hasText: 'Coffee Maker' })).toContainText('ON')
})