const { test, expect } = require('@playwright/test');

test('User can login, add product to cart, verify it, and logout', async ({ page }) => {
  // 1. Go to login page
  await page.goto('/');
  console.log('Navigated to login page');

  // 2. Login with valid credentials
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.waitForTimeout(2000);
  await page.locator('#login-button').click();
  console.log('Submitted login form');

  // Verify we are on the inventory page
  await page.waitForTimeout(3000);
  await expect(page).toHaveURL(/inventory\.html/);
  console.log('Login successful, user is on inventory page');

  // 3. Add one product to the cart
  // Pick the first product on the page
  const firstItem = page.locator('.inventory_item').first();
  const productNameLocator = firstItem.locator('.inventory_item_name');
  const productName = (await productNameLocator.textContent())?.trim();
  await page.waitForTimeout(3000);
  console.log(`Selected Product : "${productName}"`);

  // Click "Add to cart" button for that product
  await firstItem.getByRole('button', { name: 'Add to cart' }).click();
  await page.waitForTimeout(2000);
  console.log('Clicked "Add to cart" for selected product');

  // 4. Open the cart
  await page.locator('.shopping_cart_link').click();
  await page.waitForTimeout(3000);
  console.log('Opened shopping cart');

  // Verify we are on the cart page
  await page.waitForTimeout(3000);
  await expect(page).toHaveURL(/cart\.html/);
  console.log('User is on cart page');

  // 5. Verify the product name in the cart matches what we added
  const cartItemName = (await page.locator('.cart_item .inventory_item_name').first().textContent())?.trim();

  await page.waitForTimeout(3000);
  await expect(cartItemName).toBe(productName);
  console.log(`[PASS] "${productName}" is verified at cart as: "${cartItemName}"`);

  // 6. Logout
  // Open side menu
  await page.locator('#react-burger-menu-btn').click();
  await page.waitForTimeout(2000);
  console.log('Opened side menu');

  // Click Logout
  await page.locator('#logout_sidebar_link').click();
  console.log('Clicked logout');

  // 7. Verify we are back on the login page
  await page.waitForTimeout(3000);
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('#login-button')).toBeVisible();
  console.log('[PASS] Logout successful, user is back on login page');

  console.log('--- Test finished successfully ---');

});
