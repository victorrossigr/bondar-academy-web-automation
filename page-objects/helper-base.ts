import { Page } from '@playwright/test';

export class HelperBase {

    protected readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    protected async getToasterMessage(){
        // method that validates an toaster that appear in every page
    }
}
