// @ts-check
/*
const { test, expect } = require('@playwright/test');
*/


/*
test.only('Credenciales', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page).toHaveTitle(/OrangeHRM/);
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login'}).click ();
  await page.pause();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Leonard');
  await page.getByPlaceholder('Middle Name').click();
  await page.getByPlaceholder('Middle Name').fill('JP');
  await page.getByPlaceholder('Last Name').click();
  await page.getByPlaceholder('Last Name').fill('Matt');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('link', { name: 'Employee List' }).click();
  await page.getByPlaceholder('Type for hints...').first().click();
  await page.getByPlaceholder('Type for hints...').first().fill('Leonard');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('Leonard JP').click();
  await page.locator('span').filter({ hasText: 'Mustafas Şahin' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
  await page.pause();
  await page.waitForTimeout(2000); // Espera 2 segundos;
  
});
*/