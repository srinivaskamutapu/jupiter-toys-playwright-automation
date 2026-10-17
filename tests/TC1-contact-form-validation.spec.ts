// Import Playwright tools to create a test and check the result.
import { test, expect } from '@playwright/test';

// Import our HomePage class.
import { HomePage } from '../pages/HomePage';

// Import our ContactPage class.
import { ContactPage } from '../pages/ContactPage';

// Import reusable Contact form test data.
import { contactData } from '../test-data/contactData';

// Check that submitting an empty Contact form displays validation errors.
test('TC1 - Verify Contact form validation', async ({ page }) => {

    // Create a HomePage object using the browser tab.
    const homePage = new HomePage(page);

    // Create a ContactPage object using the same browser tab.
    const contactPage = new ContactPage(page);

    // Open the Jupiter Toys homepage.
    await homePage.navigate();

    // Navigate to the Contact page.
    await homePage.goToContact();

    // Click Submit without filling in any fields.
    await contactPage.submitForm();

    // Verify that the Forename required-field error is visible.
    await expect(page.getByText('Forename is required')).toBeVisible();

    // Verify that the Email required-field error is visible.
    await expect(page.getByText('Email is required')).toBeVisible();

    // Verify that the Message required-field error is visible.
    await expect(page.getByText('Message is required')).toBeVisible();

    // Enter valid name into the Forename field.
    await contactPage.enterForename(contactData.validContact.forename);

    // Verify that the Forename error disappears after entering a value.
    await expect(page.getByText('Forename is required')).toBeHidden();

    // Enter a valid email address.
    await contactPage.enterEmail(contactData.validContact.email);

    // Verify that the Email validation error disappears.
    await expect(page.getByText('Email is required')).toBeHidden();

    // Enter a message into the Message field.
    await contactPage.enterMessage(contactData.validContact.message);

    // Verify that the Message validation error disappears.
    await expect(page.getByText('Message is required')).toBeHidden();

    // Verify that we are still on the Contact page - Regular Expression
    await expect(page).toHaveURL(/\/contact\/?$/i);
});