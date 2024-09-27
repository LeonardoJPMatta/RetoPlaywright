// @ts-check
const { test, expect } = require('@playwright/test');
import {loginPage} from '../../Test/CredencialesPOM'


test('Credenciales', async ({ page }) => {
     const Login=new loginPage(page)

        await Login.goToLoginPage()
        await Login.login('Admin','admin123');  

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
        await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
        
    }); 
        
