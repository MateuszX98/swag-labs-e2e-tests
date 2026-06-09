import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly basketIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.basketIcon = page.locator('[data-test="shopping-cart-link"]');
    }

    async addToCart(nameProduct: string): Promise<void> {
        const addToCartButton = this.page.locator(`[data-test="add-to-cart-${nameProduct}"]`);
        await addToCartButton.click();
    };

    async goToBasket(): Promise<void> {
        await this.basketIcon.click();
    }
}