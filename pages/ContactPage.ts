// Import the Page type from Playwright to work with the browser.
import type { Page } from '@playwright/test';

// Create a class to handle the Jupiter Toys Contact page.
export class ContactPage {

    // Keep the browser page inside this class and prevent it from being replaced.
    private readonly page: Page;

    // Get the browser page when we create a ContactPage object.
    constructor(page: Page) {
        // Save the browser page so other methods can use it.
        this.page = page;
    }

    // Click the Submit button on the Contact page.
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

}