// Import the Page type from Playwright.
import type { Page } from '@playwright/test';

// Create a class to handle the Jupiter Toys Shop page.
export class ShopPage {

    // Keep the browser page inside this class and prevent it from being replaced.
    private readonly page: Page;

    // Receive the browser page when creating a ShopPage object.
    constructor(page: Page) {
        this.page = page;
    }

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

}