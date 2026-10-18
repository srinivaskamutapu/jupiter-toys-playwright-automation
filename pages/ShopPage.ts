// Import Playwright's expect function for assertions.
import { expect } from '@playwright/test';

// Import the BasePage class to use its common properties and methods.
import { BasePage } from './BasePage';

// ShopPage inherits common properties and methods from BasePage.
export class ShopPage extends BasePage { 

    // Navigate to the Shop page.
    async goToShop(): Promise<void> {

        // Find the Shop link and click it.
        await this.page.getByRole('link', { name: 'Shop', exact: true }).click();
    }

    // Add a specified quantity of a product to the shopping cart.
    async addProductToCart(productName: string, quantity: number): Promise<void> {

        // Find the product card containing the specified product name.
        const product = this.page.locator('.product').filter({ hasText: productName });

        // Click the Buy link once for each item requested.
        for (let i = 0; i < quantity; i++) {

            await product.getByRole('link', { name: 'Buy' }).click();
        }
    }

    // Verify that the Shop page is displayed.
    async verifyPageLoaded(): Promise<void> {
        // Check that at least one product is visible on the Shop page.
        await expect(this.page.locator('.product').first()).toBeVisible();
    }

}