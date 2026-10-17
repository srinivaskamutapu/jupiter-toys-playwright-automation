// Import Playwright tools for creating tests and verifying results.
import { test, expect } from '@playwright/test';

// Import our Page Object classes.
import { HomePage } from '../pages/HomePage';
import { ShopPage } from '../pages/ShopPage';
import { CartPage } from '../pages/CartPage';

// Import product test data.
import { products } from '../test-data/products';

// Verify product prices, quantities, subtotals and cart total.
test('TS3 - Verify shopping cart calculations', async ({ page }) => {

    // Create Page Object instances using the same browser tab.
    const homePage = new HomePage(page);
    const shopPage = new ShopPage(page);
    const cartPage = new CartPage(page);

    // Open the Jupiter Toys homepage.
    await homePage.navigate();

    // Navigate to the Shop page.
    await shopPage.goToShop();

    // Wait 2 seconds before adding products to avoid missing items in Firefox - Srini Kamutapu 17/10/2026
    await page.waitForTimeout(2000);

    // Convert product test data into an array for reuse.
    const productList = Object.values(products);

    // -------------------------------------------------
    // ADD PRODUCTS TO CART
    // -------------------------------------------------

    // Add all products using their names and quantities.
    for (const product of productList) {

        await shopPage.addProductToCart(
            product.name,
            product.quantity
        );

    }

    // -------------------------------------------------
    // VERIFY CART QUANTITY
    // -------------------------------------------------

    // Calculate the expected total quantity of products.
    const expectedQuantity = productList.reduce( (total, product) => total + product.quantity, 0 );

    // Verify that the cart navigation shows the expected quantity.
    await expect(
        page.getByRole('link', {
            name: `Cart (${expectedQuantity})`,
            exact: true
        })
    ).toBeVisible();

    // -------------------------------------------------
    // NAVIGATE TO CART
    // -------------------------------------------------

    // Open the shopping cart.
    await cartPage.goToCart();

    // Verify that the Cart page is displayed.
    await expect(page).toHaveURL(/\/cart\/?$/i);

    // -------------------------------------------------
    // VERIFY PRODUCT DETAILS
    // -------------------------------------------------

    // Verify price, quantity and subtotal for every product.
    for (const product of productList) {

        await cartPage.verifyProduct(product);

    }

    // -------------------------------------------------
    // VERIFY CART TOTAL
    // -------------------------------------------------

    // Verify the cart total using the reusable CartPage method.
    await cartPage.verifyTotal(productList);

});