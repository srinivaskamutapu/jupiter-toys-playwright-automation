# Jupiter Toys – Playwright Automation Framework

## Author

**Name:** Srinivas Kamutapu  
**Project:** Planit Automation Testing Technical Assessment  
**Technology:** Playwright with TypeScript  
**Design Pattern:** Page Object Model (POM)

---

## 1. Project Overview

This project is an automated testing framework developed as part of the
Planit Automation Testing Technical Assessment.

The framework automates functional test scenarios for the Jupiter Toys
web application using Playwright, TypeScript, and the Page Object Model (POM).

The framework is designed with a focus on:

- Reusability
- Maintainability
- Readability
- Scalability
- Cross-browser testing
- Continuous Integration (CI)

The project follows a modular structure, allowing additional test scenarios,
page objects, and test data to be added easily in the future.

---

## 2. Technologies Used

| Technology | Purpose |
|------------|---------|
| Playwright | Browser automation and testing |
| TypeScript | Programming language |
| Node.js | JavaScript runtime environment |
| npm | Dependency management |
| Visual Studio Code | Development environment |
| Page Object Model (POM) | Test automation design pattern |
| Git | Version control |
| GitHub | Source code repository |
| GitHub Actions | Continuous Integration |
| HTML Reporter | Test execution reporting |

---

## 3. Application Under Test

**Application:** Jupiter Toys

**Application URL:** http://jupiter.cloud.planittesting.com

The Jupiter Toys application contains multiple functional areas,
including Home, Contact, Shop, and Cart.

This assessment focuses on Contact form validation, successful
form submission, and shopping cart calculations.

---

## 4. Framework Architecture

The automation framework follows the Page Object Model (POM)
design pattern.

### Page Object Model

Each application page has a corresponding Page Object class
containing reusable methods for interacting with the application.

- `HomePage.ts` – Homepage navigation.
- `ContactPage.ts` – Contact form interactions.
- `ShopPage.ts` – Product selection and cart additions.
- `CartPage.ts` – Shopping cart validation.

### Test Classes

Test specifications contain test scenarios and assertions.

### Test Data

Test data is maintained separately from test logic.

This separation improves maintainability and allows the framework
to be extended without unnecessary duplication.

---

## 5. Project Structure

```text
Jupiter Toys/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
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

### Folder Responsibilities

| Folder / File | Description |
|---------------|-------------|
| `pages/` | Reusable Page Object classes |
| `tests/` | Automated test scenarios |
| `test-data/` | Test input and expected data |
| `.github/workflows/` | GitHub Actions CI configuration |
| `playwright.config.ts` | Playwright test configuration |
| `tsconfig.json` | TypeScript compiler configuration |
| `package.json` | Project dependencies and scripts |
| `README.md` | Project documentation |

---

## 6. Automated Test Scenarios

### TC1 – Contact Form Validation

**Objective:** Verify mandatory field validation on the Contact page.

**Test Steps:**

1. Navigate to the Jupiter Toys homepage.
2. Click the Contact navigation link.
3. Submit the form without entering any information.
4. Verify the following validation messages are displayed:
   - Forename is required
   - Email is required
   - Message is required
5. Enter a valid Forename.
6. Verify the Forename validation message disappears.
7. Enter a valid Email.
8. Verify the Email validation message disappears.
9. Enter a valid Message.
10. Verify the Message validation message disappears.

**Expected Result:**

Mandatory validation messages should appear when the form is submitted
without required information and disappear after valid values are entered.

**Test File:**

`tests/TC1-contact-form-validation.spec.ts`

---

### TC2 – Successful Contact Form Submission

**Objective:** Verify successful Contact form submission.

**Test Steps:**

1. Navigate to the Jupiter Toys homepage.
2. Open the Contact page.
3. Enter valid mandatory field values:
   - Forename
   - Email
   - Message
4. Submit the Contact form.
5. Verify the successful submission message.
6. Repeat the test five times.

**Expected Result:**

A successful submission confirmation message should be displayed
for each execution.

**Execution Count:** 5

**Test File:**

`tests/TC2-contact-form-submission.spec.ts`

---

### TC3 – Shopping Cart Validation

**Objective:** Verify product prices, quantities, subtotals,
and total amount in the shopping cart.

**Test Steps:**

1. Navigate to the Jupiter Toys homepage.
2. Open the Shop page.
3. Add 2 Stuffed Frogs to the cart.
4. Add 5 Fluffy Bunnies to the cart.
5. Add 3 Valentine Bears to the cart.
6. Verify the cart contains 10 items.
7. Navigate to the Cart page.
8. Verify product unit prices.
9. Verify product quantities.
10. Verify product subtotals.
11. Verify the total cart amount.

### Expected Shopping Cart Data

| Product | Unit Price | Quantity | Subtotal |
|---------|------------|----------|----------|
| Stuffed Frog | $10.99 | 2 | $21.98 |
| Fluffy Bunny | $9.99 | 5 | $49.95 |
| Valentine Bear | $14.99 | 3 | $44.97 |
| **Total** | | **10** | **$116.90** |

**Expected Result:**

The shopping cart should display the correct unit prices,
quantities, subtotals, and total amount.

**Test File:**

`tests/TC3-shopping-cart.spec.ts`

---

## 7. Supported Browsers

The automation framework supports cross-browser testing using:

- Chromium
- Firefox
- WebKit

Browser configurations are maintained in `playwright.config.ts`.

---

## 8. Prerequisites

Ensure the following software is installed:

- Node.js
- npm
- Git (required for cloning the repository)

Visual Studio Code is recommended for development.

---

## 9. Installation and Setup

### Step 1 – Clone the Repository

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the public GitHub repository URL.

### Step 2 – Navigate to the Project Directory

```bash
cd <repository-folder>
```

### Step 3 – Install Dependencies

```bash
npm ci
```

This installs the project dependencies using `package-lock.json`.

### Step 4 – Install Playwright Browsers

```bash
npx playwright install
```

This installs the browsers required for Playwright testing.

---

## 10. Running Automated Tests

### Run All Tests

```bash
npx playwright test
```

Runs all test scenarios across Chromium, Firefox, and WebKit.

### Run Tests in Headed Mode

```bash
npx playwright test --headed
```

Opens browser windows during test execution.

### Run Tests Sequentially

```bash
npx playwright test --workers=1
```

Runs tests using a single worker.

### Run Tests in Headed Mode Sequentially

```bash
npx playwright test --headed --workers=1
```

### Run Individual Test Scenarios

**TC1 – Contact Form Validation**

```bash
npx playwright test TC1-contact-form-validation.spec.ts
```

**TC2 – Contact Form Submission**

```bash
npx playwright test TC2-contact-form-submission.spec.ts
```

**TC3 – Shopping Cart Validation**

```bash
npx playwright test TC3-shopping-cart.spec.ts
```

### Run Tests on a Specific Browser

**Chromium**

```bash
npx playwright test --project=chromium
```

**Firefox**

```bash
npx playwright test --project=firefox
```

**WebKit**

```bash
npx playwright test --project=webkit
```

---

## 11. TypeScript Validation

The project uses TypeScript for test automation development.

To check TypeScript code without generating JavaScript files:

```bash
npx tsc --noEmit
```

This command validates TypeScript types and reports compilation errors.

---

## 12. Test Reports

Playwright generates an HTML report after test execution.

### Open the HTML Report

```bash
npx playwright show-report
```

The report provides information about:

- Passed tests
- Failed tests
- Test execution duration
- Browser-specific results
- Failure details
- Traces when available

### Test Artifacts

Generated reports and test results are excluded from Git
using `.gitignore`.

---

## 13. Continuous Integration (CI)

The project includes GitHub Actions integration.

**Workflow File:**

`.github/workflows/playwright.yml`

The workflow is triggered when:

- Code is pushed to the `main` or `master` branch.
- A pull request targets the `main` or `master` branch.

### CI Workflow Steps

1. Checkout the repository.
2. Set up Node.js.
3. Install dependencies using `npm ci`.
4. Install Playwright browsers and system dependencies.
5. Execute the automated test suite.
6. Upload the Playwright HTML report.

### CI Configuration

- Operating System: Ubuntu
- Browser Execution: Headless
- Workers: 1
- Retries: 2 for failed tests
- Report Retention: 30 days

---

## 14. Test Execution Results

### Local Execution Results

| Metric | Result |
|--------|--------|
| Test Scenarios | 3 |
| TC2 Executions | 5 |
| Browser Projects | 3 |
| Total Test Executions | 21 |
| Passed | 21 |
| Failed | 0 |
| TypeScript Validation | Passed |

**Execution Status:** All 21 tests passed locally across
Chromium, Firefox, and WebKit.

GitHub Actions execution results can be viewed in the
Actions tab of the repository after the workflow runs.

---

## 15. Framework Design Principles

The framework follows these principles:

### Reusability

Page Object methods can be reused across multiple test scenarios.

### Maintainability

Changes to page interactions can be managed within the
corresponding Page Object classes.

### Separation of Concerns

- Page Objects handle interactions.
- Test files define scenarios and assertions.
- Test data files contain input and expected values.

### Scalability

Additional Page Objects, test scenarios, and test data
can be added without restructuring the existing framework.

### Cross-Browser Compatibility

The same automated scenarios execute across multiple browsers.

---

## 16. Future Enhancements

Potential future improvements include:

- Additional functional test scenarios
- Smoke and regression test tagging
- Data-driven testing with multiple input combinations
- Reusable Playwright fixtures
- Improved synchronization for dynamic application updates
- Enhanced reporting
- Additional CI/CD integrations

---

## 17. Conclusion

This project demonstrates the implementation of a reusable,
maintainable, and extensible Playwright automation framework
using TypeScript and the Page Object Model.

The automated scenarios cover Contact form validation,
successful form submission, and shopping cart calculations.

The framework supports cross-browser testing, HTML reporting,
and automated execution through GitHub Actions.

---

**Developed by Srinivas Kamutapu**  
**Planit Automation Testing Technical Assessment**