import { Page, Locator } from '@playwright/test';

export class CheckoutOverviewPage {
    readonly page: Page;
    readonly finishButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.finishButton = page.locator('[data-test="finish"]');
    }

    async clickFinishButton(): Promise<void> {
        await this.finishButton.click();
    }
}