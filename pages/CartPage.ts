// Import the Page type from Playwright.
import { expect, type Page } from '@playwright/test';

// Create a class to handle the Jupiter Toys Cart page.
export class CartPage {

    // Keep the browser page inside this class and prevent it from being replaced.
    private readonly page: Page;

    // Receive the browser page when creating a CartPage object.
    constructor(page: Page) {
        // Save the browser page so other methods can use it.
        this.page = page;
    }

    // Navigate to the shopping cart.
    async goToCart(): Promise<void> {
        // Find the Cart navigation link and click it.
        await this.page.getByRole('link', { name: /^Cart\s*\(\d+\)$/ }).click();
    }

    // Find the shopping cart row containing the specified product.
    getProductRow(productName: string) {
        // Find a table row containing the product name.
        return this.page.getByRole('row').filter({
            hasText: productName
        });
    }

    // Verify the price, quantity and subtotal of a product.
    async verifyProduct( product: { name: string; price: number; quantity: number } ): Promise<void> {

        // Find the product row in the shopping cart.
        const productRow = this.getProductRow(product.name);

        // Verify the product unit price.
        await expect( productRow.getByRole('cell', {
                name: `$${product.price.toFixed(2)}`,
                exact: true
            })
        ).toBeVisible();

        // Verify the product quantity.
        await expect( productRow.getByRole('spinbutton') ).toHaveValue(product.quantity.toString());

        // Calculate the expected subtotal.
        const expectedSubtotal = product.price * product.quantity;

        // Verify the product subtotal.
        await expect(
            productRow.getByRole('cell', {
                name: `$${expectedSubtotal.toFixed(2)}`,
                exact: true
            })
        ).toBeVisible();
    }

    // Verify the shopping cart total using expected product data.
    async verifyTotal( products: { name: string; price: number; quantity: number }[] ): Promise<void> {

            // Calculate the expected total from all products.
            const expectedTotal = products.reduce( (total, product) => total + product.price * product.quantity, 0 );

            // Read the total displayed on the shopping cart page.
            const totalText = await this.page.getByText(/^Total:\s*\d+(?:\.\d+)?$/).textContent();

            // Verify that the total text exists.
            expect(totalText).not.toBeNull();

            // Extract the actual total from the displayed text.
            const actualTotal = Number( totalText!.replace('Total:', '').trim() );

            // Verify the actual total matches the expected total.
            expect(actualTotal).toBeCloseTo(expectedTotal, 2);
    }   

}