# Jupiter Toys - Playwright Automation Framework

## Project Overview

This project is an automated testing framework developed for the
Planit Automation Technical Assessment.

The framework automates functional test scenarios for the Jupiter Toys
web application using Playwright and TypeScript.

It follows the Page Object Model (POM) design pattern and
Object-Oriented Programming (OOP) principles to improve
code reusability, readability, maintainability and scalability.

## Application Under Test

Application: Jupiter Toys

URL: http://jupiter.cloud.planittesting.com

## Technology Stack

- Playwright
- TypeScript
- Node.js
- Visual Studio Code
- Git and GitHub
- GitHub Actions (CI/CD)

## Framework Features

- Page Object Model (POM)
- Object-Oriented Programming (OOP)
- Abstract BasePage class
- Inheritance and method overriding
- Support for polymorphism
- Reusable page methods
- Separate test data
- Cross-browser testing
- Automated assertions
- HTML test reports
- GitHub Actions CI/CD integration

## Project Structure

```text
Jupiter Toys/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   ├── BasePage.ts
│   ├── HomePage.ts
│   ├── ContactPage.ts
│   ├── ShopPage.ts
│   └── CartPage.ts
│
├── test-data/
│   ├── contactData.ts
│   └── products.ts
│
├── tests/
│   ├── TC1-contact-form-validation.spec.ts
│   ├── TC2-contact-form-submission.spec.ts
│   └── TC3-shopping-cart.spec.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

## Framework Architecture

The framework follows the Page Object Model (POM).

Each application page has a corresponding Page Object class.

Test cases use these Page Objects to perform actions and
verify application functionality.

### Page Object Responsibilities

| Page Object | Responsibility |
|-------------|----------------|
| BasePage | Common functionality and page verification contract |
| HomePage | Homepage navigation and verification |
| ContactPage | Contact form interactions and verification |
| ShopPage | Product selection and cart additions |
| CartPage | Shopping cart verification and calculations |

## Object-Oriented Programming (OOP)

The framework uses OOP principles to improve code organization
and maintainability.

### 1. Encapsulation

The Playwright Page object is stored in BasePage using:

```typescript
protected readonly page: Page;
```

This allows child Page Objects to access the Page object
while preventing reassignment through the property.

Page-specific interactions are organized within their
respective Page Object classes.

### 2. Abstraction

Page Objects expose reusable methods that hide
the underlying Playwright implementation.

For example:

```typescript
await homePage.navigate();

await homePage.goToContact();
```

The test cases do not need to know the locator details
used to perform these actions.

### 3. Inheritance

BasePage acts as the parent class for all Page Objects.

```typescript
export abstract class BasePage {
```

The following classes inherit from BasePage:

```typescript
export class HomePage extends BasePage

export class ContactPage extends BasePage

export class ShopPage extends BasePage

export class CartPage extends BasePage
```

This allows the child classes to reuse common functionality
such as the constructor, Page object and navigation method.

### 4. Polymorphism

BasePage declares an abstract method:

```typescript
abstract verifyPageLoaded(): Promise<void>;
```

Each child class provides its own implementation.

- HomePage verifies the Start Shopping link.
- ContactPage verifies the Forename field.
- ShopPage verifies that products are displayed.
- CartPage verifies the shopping cart table.

This provides a common method name with
page-specific behavior.

The method can be called through a BasePage reference,
allowing runtime polymorphism.

### 5. Abstract Class

BasePage is an abstract class.

It contains common methods and defines methods
that child classes must implement.

For example:

```typescript
export abstract class BasePage {

    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(path: string): Promise<void> {
        await this.page.goto(path);
    }

    abstract verifyPageLoaded(): Promise<void>;
}
```

This ensures that every concrete Page Object implements
its own page verification method.

## Automated Test Scenarios

### TC1 - Contact Form Validation

Objective:

Verify mandatory field validation on the Contact page.

Test Steps:

1. Navigate to the Jupiter Toys homepage.
2. Open the Contact page.
3. Submit the form without entering any values.
4. Verify mandatory field validation messages.
5. Enter a valid Forename.
6. Verify the Forename validation message disappears.
7. Enter a valid Email.
8. Verify the Email validation message disappears.
9. Enter a valid Message.
10. Verify the Message validation message disappears.

Expected Result:

All mandatory validation messages are displayed
when submitting an empty form and disappear
after valid values are entered.

### TC2 - Successful Contact Form Submission

Objective:

Verify successful submission of the Contact form.

Test Steps:

1. Navigate to the Jupiter Toys homepage.
2. Open the Contact page.
3. Enter valid mandatory field values.
4. Submit the Contact form.
5. Verify the success confirmation message.
6. Repeat the test five times.

Expected Result:

The Contact form is submitted successfully
and the confirmation message is displayed.

### TC3 - Shopping Cart Verification

Objective:

Verify product prices, quantities, subtotals
and the shopping cart total.

Products:

| Product | Unit Price | Quantity | Subtotal |
|---------|------------|----------|----------|
| Stuffed Frog | $10.99 | 2 | $21.98 |
| Fluffy Bunny | $9.99 | 5 | $49.95 |
| Valentine Bear | $14.99 | 3 | $44.97 |
| **Total** | | **10** | **$116.90** |

Test Steps:

1. Navigate to the Jupiter Toys homepage.
2. Open the Shop page.
3. Add 2 Stuffed Frogs to the cart.
4. Add 5 Fluffy Bunnies to the cart.
5. Add 3 Valentine Bears to the cart.
6. Verify the cart contains 10 items.
7. Open the Cart page.
8. Verify each product's unit price.
9. Verify each product's quantity.
10. Verify each product's subtotal.
11. Verify the shopping cart total.

Expected Result:

The displayed product prices, quantities,
subtotals and cart total match the expected values.

## Test Data Management

Test data is maintained separately from test scripts.

### contactData.ts

Contains:

- Valid Contact form data
- Contact form submission repetition count

### products.ts

Contains:

- Product names
- Expected unit prices
- Expected quantities

Separating test data from test logic makes the
framework easier to maintain and extend.

## Prerequisites

The following software is required:

- Node.js
- npm
- Git
- Visual Studio Code or another code editor

## Project Setup

### Step 1 - Clone the Repository

Clone the repository using Git:

```bash
git clone https://github.com/srinivaskamutapu/jupiter-toys-playwright-automation.git
```

Navigate into the project directory:

```bash
cd jupiter-toys-playwright-automation
```

Note: Repository access is required if the repository is private.

### Step 2 - Install Dependencies

```bash
npm ci
```

### Step 3 - Install Playwright Browsers

```bash
npx playwright install
```

## Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests in Chromium

```bash
npx playwright test --project=chromium
```

### Run Tests in Firefox

```bash
npx playwright test --project=firefox
```

### Run Tests in WebKit

```bash
npx playwright test --project=webkit
```

### Run TC1

```bash
npx playwright test tests/TC1-contact-form-validation.spec.ts
```

### Run TC2

```bash
npx playwright test tests/TC2-contact-form-submission.spec.ts
```

### Run TC3

```bash
npx playwright test tests/TC3-shopping-cart.spec.ts
```

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

### Run Tests in Debug Mode

```bash
npx playwright test --debug
```

### Run Tests Using Playwright UI

```bash
npx playwright test --ui
```

### Check TypeScript

```bash
npx tsc --noEmit
```

## Test Reports

Playwright generates an HTML report after test execution.

To open the report:

```bash
npx playwright show-report
```

The report provides:

- Test execution results
- Passed and failed test details
- Browser information
- Execution duration
- Failure details when applicable

## Cross-Browser Testing

The framework supports execution across:

- Chromium
- Firefox
- WebKit

All test scenarios are configured to execute
across the three browser projects.

## Continuous Integration (CI/CD)

GitHub Actions is configured to execute the
automation tests automatically.

Workflow file:

```text
.github/workflows/playwright.yml
```

The workflow performs the following activities:

1. Checks out the repository.
2. Sets up Node.js.
3. Installs project dependencies.
4. Installs Playwright browsers and dependencies.
5. Executes the Playwright tests.
6. Uploads the HTML test report as an artifact.

This allows automated test execution in a
consistent environment.

## Test Execution Status

The framework has successfully executed:

- 21 Playwright tests
- 3 browser projects
- 21 passing tests in local execution
- Successful GitHub Actions execution

The test suite should be rerun after any framework
or application changes.

## Framework Scalability

The framework is designed to support future enhancements.

Additional functionality can be introduced by:

- Creating new Page Object classes
- Adding new test scenarios
- Extending test data
- Introducing reusable utilities
- Adding test fixtures when required
- Expanding CI/CD workflows

The existing Page Object Model structure allows
new functionality to be added without unnecessary
changes to existing test cases.

## Version Control

Git is used for version control.

GitHub is used to store the source code and
run automated tests through GitHub Actions.

Common Git commands:

```bash
git status

git add .

git commit -m "Update automation framework"

git push
```

## Author

Srinivas Kamutapu

Planit Automation Technical Assessment