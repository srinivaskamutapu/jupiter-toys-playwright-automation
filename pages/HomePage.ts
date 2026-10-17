// Import Page from Playwright to work with the browser.
import type { Page } from '@playwright/test';

// Create a class to handle the Jupiter Toys home page.
export class HomePage {

    // Keep the browser page inside this class and prevent it from being replaced.
    private readonly page: Page;

    // Get the browser page when we create a HomePage object.
    constructor(page: Page) {
        // Save the browser page so other methods can use it.
        this.page = page;
    }

    // Open the Jupiter Toys home page - Base URL
    async navigate(): Promise<void> {
        await this.page.goto('/');
    }

    // Click the Contact link to open the Contact page.
    async goToContact(): Promise<void> {
        // Find the Contact link and click it.
        await this.page.getByRole('link', { name: 'Contact' }).click();
    }
    
}