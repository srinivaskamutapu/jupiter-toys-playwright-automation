// Import Playwright's expect function for assertions.
import { expect } from '@playwright/test';

// Import the BasePage class to use its common properties and methods.
import { BasePage } from './BasePage';

// CartPage inherits common properties and methods from BasePage.
export class CartPage extends BasePage {

    // Navigate to the shopping cart page.
    async goToCart(): Promise<void> {
        // Find the Cart link containing the item count and click it.
        await this.page.getByRole('link', {
            name: /^Cart\s*\(\d+\)$/
        }).click();

    }

    // Find the shopping cart row containing the specified product.
    getProductRow(productName: string) {
        return this.page.getByRole('row').filter({
            hasText: productName
        });

    }

    // Verify the unit price, quantity and subtotal of a product.
    async verifyProduct(
        product: { name: string; price: number; quantity: number }
    ): Promise<void> {

        // Find the row containing the specified product.
        const productRow = this.getProductRow(product.name);

        // Verify the product's unit price.
        await expect(productRow.getByRole('cell', {
            name: `$${product.price.toFixed(2)}`,
            exact: true
        })).toBeVisible();

        // Verify the product quantity.
        await expect(productRow.getByRole('spinbutton')).toHaveValue(product.quantity.toString());

        // Calculate the expected subtotal.
        const expectedSubtotal = product.price * product.quantity;

        // Verify the product subtotal.
        await expect(productRow.getByRole('cell', {
            name: `$${expectedSubtotal.toFixed(2)}`,
            exact: true
        })).toBeVisible();

    }

    // Verify the shopping cart total using expected product data.
    async verifyTotal(
        products: { name: string; price: number; quantity: number }[]
    ): Promise<void> {

        // Calculate the expected total for all products.
        const expectedTotal = products.reduce( (total, product) => total + product.price * product.quantity, 0 );

        // Read the total displayed on the shopping cart page.
        const totalText = await this.page.getByText(/^Total:\s*\d+(?:\.\d+)?$/).textContent();

        // Verify that the total text exists.
        expect(totalText).not.toBeNull();

        // Convert the displayed total into a number.
        const actualTotal = Number(totalText!.replace('Total:', '').trim());

        // Compare the actual total with the expected total.
        expect(actualTotal).toBeCloseTo(expectedTotal, 2);

    }

    // Verify that the shopping cart page is displayed.
    async verifyPageLoaded(): Promise<void> {
        // Check that the shopping cart table is visible.
        await expect( this.page.getByRole('table') ).toBeVisible();
    }
}