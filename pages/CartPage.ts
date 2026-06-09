import { Page, Locator } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;
    readonly cartItemName: Locator;

    constructor(page:Page) {
        this.page = page;
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.cartItemName = page.locator('[data-test="item-4-title-link"]');
    }

    async gotoInventoryPage(): Promise<void> {
        await this.continueShoppingButton.click();
    }

    async gotoCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }

    async getCartItemName(): Promise<string> {
        return await this.cartItemName.innerText();
    }
    
}