import { Page, Locator } from '@playwright/test';

export class CheckoutCompletePage {
    readonly page: Page;
    readonly backHomeButton: Locator;

    constructor (page: Page) {
        this.page = page;
        this.backHomeButton = page.locator('[data-test="back-to-products"]');
    }

    async clickBackHomeButton(): Promise<void> {
        await this.backHomeButton.click();
    }

    get completeHeader() {
        return this.page.locator('[data-test="complete-header"]');
    }
}