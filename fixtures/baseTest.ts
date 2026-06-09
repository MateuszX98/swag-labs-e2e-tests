import {test as base } from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

// 1. Definiujemy typ dla naszych własnych fixture'ów
type MyFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
};

// 2. Rozszerzamy bazowy obiekt 'test' o nasze custom fixtures
export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        // Inicjalizacja obiektu przed uruchomieniem testu
        const loginPage = new LoginPage(page);

        // Przekazanie gotowego obiektu do testu za pmocją funkcji 'use'
        await use(loginPage);

        // Opcjonalnie: można dodać kod do sprzątania po teście, jeśli jest to potrzebne
    },
    inventoryPage: async ({ page }, use) => {
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage);
    },
    checkoutPage: async ({ page }, use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    }
});

export { expect } from '@playwright/test';