import { test, expect } from '../fixtures/baseTest';

test('Poprawne logowanie standardowego użytkownika z użyciem Fixture', async ({ page, loginPage }) => {
    // Przejdź do strony logowania
    await loginPage.goto();

    // Wprowadź poprawne dane logowania
    await loginPage.login(
        process.env.SAUCE_USERNAME!,
        process.env.SAUCE_PASSWORD!
    );

    // Sprawdź, czy użytkownik został poprawnie zalogowany
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect (page.locator('[data-test="title"]')).toHaveText('Products');

});