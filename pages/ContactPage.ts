// Import Playwright's expect function for assertions.
import { expect } from '@playwright/test';

// Import the BasePage class to use its common properties and methods.
import { BasePage } from './BasePage';

// ContactPage inherits common properties and methods from BasePage.
export class ContactPage extends BasePage {    

    // Click the Submit link on the Contact page.
    async submitForm(): Promise<void> {
        // Find the Submit link and click it.
        await this.page.getByRole('link', { name: 'Submit' }).click();
    }

    // Enter a value into the Forename field.
    async enterForename(forename: string): Promise<void> {
        // Find the Forename field and enter the provided text.
        await this.page.getByLabel('Forename').fill(forename);
    }

    // Enter an email address into the Email field.
    async enterEmail(email: string): Promise<void> {    
        // Find the Email field and enter the provided email address.
        await this.page.getByLabel('Email').fill(email);
    }

    // Enter text into the Message field.
    async enterMessage(message: string): Promise<void> {
        // Find the Message field and enter the provided text.
        await this.page.getByLabel('Message').fill(message);
    }

    // Fill all mandatory Contact form fields.
    async fillMandatoryFields(forename: string, email: string, message: string): Promise<void> {
        await this.enterForename(forename);
        await this.enterEmail(email);
        await this.enterMessage(message);
    }

    // Verify that the Contact page is displayed.
    async verifyPageLoaded(): Promise<void> {
        // Check that the Forename field is visible on the Contact page.
        await expect( this.page.getByLabel('Forename') ).toBeVisible();
    }
}