# bondar-academy-playwright-automation
Bondar Academy playground website automation project with Playwright

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version)

## Installation

```
npm install
npx playwright install
```

## Configuration

The application URL is read from an environment variable. Create your own `.env` file from the example:

```
cp .env.example .env
```

On Windows (PowerShell or CMD), use `copy .env.example .env` instead.

To run against another environment, create a `.env.<name>` file (for example, `.env.qa`) and set the `TEST_ENV` variable with its name before running the tests. When `TEST_ENV` is not set, the `.env` file is used.

## Running the tests

| Command | Description |
|---|---|
| `npm test` | Runs all tests on all browsers (Chromium, Firefox and WebKit) |
| `npm run test:chromium` | Runs all tests on Chromium only |
| `npm run test:headed` | Runs all tests with the browser window visible |
| `npm run test:ui` | Opens Playwright UI mode |
| `npm run report` | Opens the last HTML report |

To run a single spec or project, pass the options to Playwright, for example: `npx playwright test datepicker.spec.ts --project=chromium`.

## Project structure

The test suite is organized **by page (screen)** of the playground, not by feature:

- Each file in `tests/` covers one page of the application (for example, `datepicker.spec.ts` covers the Datepicker page).
- Inside each spec, the tests are grouped in a `test.describe` named after the page (for example, `Form Layouts page`), which is also how they appear in the test report.
- Each spec mirrors a Page Object in `page-objects/` (for example, `datepicker.spec.ts` ↔ `datepicker-page.ts`), and all page objects are exposed through the `PageManager`.
- Shared helpers live in `helpers/` and the custom test fixture lives in `fixtures/`.
