### Saucedemo Playwright Automation (JavaScript)

This project automates a complete end-to-end scenario on <https://www.saucedemo.com 
using Playwright + JavaScript.

### Automated Scenario

1. User logs in with valid credentials
2. Adds a product to the cart
3. Verifies the product name inside the cart
4. Logs out
5. Displays test-step success messages in the console
6. Prints the added product name as a passed test case

## Getting Started
1. Clone the repository
git clone <your-repository-url>
cd saucedemo-playwright-js

## Installation
2. Install dependencies
npm install

3. Install Playwright browsers
npx playwright install

## Running the Tests
# Run all tests (headless mode)
npm test

# Run tests with UI (headed mode)
npm run test:headed

## Project Structure
saucedemo-playwright-js/
│
├─ package.json
├─ playwright.config.js
├─ README.md
└─ tests/
   └─ e2e.spec.js

## Test Details 

The test performs the following actions:
# 1. Navigates to the SauceDemo login page
# 2. Logs in using:
Username: standard_user
Password: secret_sauce
# 3. Selects the first product on the inventory page
# 4. Adds the product to the cart
# 5. Verifies that the product name inside the cart matches the selected product
# 6. Logs out successfully
# 7. During execution, the script prints messages such as:
Login successful
[PASS] "${productName}" is verified at cart as: "${cartItemName}"
[PASS] Logout successful, user is back on login page

This makes the test output readable and useful during CI or debugging.

## Tech Stack

Playwright (JavaScript)
Node.js