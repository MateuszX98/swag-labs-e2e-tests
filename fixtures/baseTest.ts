import {test as base } from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';

// 1. Definiujemy typ dla naszych własnych fixture'ów
type MyFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    checkoutOverviewPage: CheckoutOverviewPage;
    checkoutCompletePage: CheckoutCompletePage;
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
    },
    checkoutOverviewPage: async ({ page }, use) => {
        const checkoutOverviewPage = new CheckoutOverviewPage(page);
        await use(checkoutOverviewPage);
    },
    checkoutCompletePage: async ({ page }, use) => {
        const checkoutCompletePage = new CheckoutCompletePage(page);
        await use(checkoutCompletePage);
    }
});

export { expect } from '@playwright/test';