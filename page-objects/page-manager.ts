import { Page } from '@playwright/test';
import { NavigationPage } from './navigation-page';
import { FormLayoutsPage } from './form-layouts-page';
import { DatepickerPage } from './datepicker-page';
import { DashboardPage } from './dashboard-page';

export class PageManager {

    readonly navigateTo: NavigationPage
    readonly formLayoutsPage: FormLayoutsPage
    readonly datepickerPage: DatepickerPage
    readonly dashboardPage: DashboardPage

    constructor(page: Page){
        this.navigateTo = new NavigationPage(page)
        this.formLayoutsPage = new FormLayoutsPage(page)
        this.datepickerPage = new DatepickerPage(page)
        this.dashboardPage = new DashboardPage(page)
    }
}