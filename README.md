# bondar-academy-playwright-automation
Bondar Academy playground website automation project with Playwright

## Project structure

The test suite is organized **by page (screen)** of the playground, not by feature:

- Each file in `tests/` covers one page of the application (for example, `datepicker.spec.ts` covers the Datepicker page).
- Inside each spec, the tests are grouped in a `test.describe` named after the page (for example, `Form Layouts page`), which is also how they appear in the test report.
- Each spec mirrors a Page Object in `page-objects/` (for example, `datepicker.spec.ts` ↔ `datepicker-page.ts`), and all page objects are exposed through the `PageManager`.
- Shared helpers live in `helpers/` and the custom test fixture lives in `fixtures/`.
