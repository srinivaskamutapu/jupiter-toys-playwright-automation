// Import Playwright tools to create a test and check the result.
import { test, expect } from '@playwright/test';

// Import HomePage class.
import { HomePage } from '../pages/HomePage';

// Import ContactPage Class
import { ContactPage } from '../pages/ContactPage';

// Import Contact form test data.
import { contactData } from '../test-data/contactData';

// Repeat the successful Contact form submission test 5 times.
for (let i = 1; i <= contactData.submissionCount; i++) {

    test(`TC2 - Verify successful Contact submission - Run ${i}`, async ({ page }) => {

        // Create page objects.
        const homePage = new HomePage(page);
        const contactPage = new ContactPage(page);

        // Open Jupiter Toys.
        await homePage.navigate();

        // Navigate to Contact.
        await homePage.goToContact();

        // Fill mandatory fields using reusable test data.
        await contactPage.fillMandatoryFields(
            contactData.validContact.forename,
            contactData.validContact.email,
            `${contactData.validContact.message} - Run ${i}`
        );

        // Submit the Contact form.
        await contactPage.submitForm();

        // Verify the success message.
        await expect( page.getByText(/Thanks.*we appreciate your feedback/i) ).toBeVisible({ timeout: 30000 });

    });
}