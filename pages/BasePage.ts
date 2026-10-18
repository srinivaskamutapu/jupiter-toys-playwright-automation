// Import Playwright's Page type.
import type { Page } from '@playwright/test';

// BasePage is an abstract parent class for all Page Objects.
export abstract class BasePage {

    // Keep the browser page inside this class and prevent it from being replaced.
    protected readonly page: Page;

    // Receive the Playwright page object and store it.
    constructor(page: Page) {
        this.page = page;
    }

    // Reusable method for navigating to a URL.
    async navigateTo(path: string): Promise<void> {
        await this.page.goto(path);
    }

    // Every child class must implement its own page verification method.
    abstract verifyPageLoaded(): Promise<void>;
}