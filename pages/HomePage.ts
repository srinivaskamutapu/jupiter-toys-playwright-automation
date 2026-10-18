// Import Playwright's expect function for assertions.
import { expect } from '@playwright/test';

//This allows HomePage to use the BasePage class.
import { BasePage } from './BasePage';

// HomePage inherits common properties and methods from BasePage.
export class HomePage extends BasePage{

    // Open the Jupiter Toys homepage using the configured baseURL.
    async navigate(): Promise<void> {
        await this.navigateTo('/');
    }

    // Click the Contact link to open the Contact page.
    async goToContact(): Promise<void> {
        // Find the Contact link and click it.
        await this.page.getByRole('link', { name: 'Contact' }).click();
    }
    
    // Verify that the Jupiter Toys homepage is displayed.
    async verifyPageLoaded(): Promise<void> {
        // Check that the Start Shopping link is visible on the homepage.
        await expect( this.page.getByRole('link', { name: 'Start Shopping' }) ).toBeVisible();
    }
}