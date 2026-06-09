import { test, expect } from '../fixtures/baseTest';

test('Proces dodania do koszyka i przejścia na podsumowanie zamówienia', async ({ loginPage, inventoryPage, cartPage, checkoutPage, page }) => {
    // Logowanie do aplikacji
    await loginPage.goto();
    await loginPage.login(
        process.env.SAUCE_USERNAME!,
        process.env.SAUCE_PASSWORD!
    );
    // Dodanie produktu do koszyka
    await inventoryPage.addToCart('sauce-labs-backpack');

    // Przejście do koszyka
    await inventoryPage.goToBasket();

    // Sprawdzenie, czy produkt został dodany do koszyka
    const cartItem = await cartPage.getCartItemName();
    expect(cartItem).toEqual('Sauce Labs Backpack');

    // Przejście do podsumowania zamówienia
    await cartPage.gotoCheckout();

    // Wypełnienie informacji o kliencie
    await checkoutPage.fillCheckoutInfromation('Jan', 'Kowalski', '12345');

    // Kontynuacja do następnego kroku
    await checkoutPage.clickContinueButton();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
});