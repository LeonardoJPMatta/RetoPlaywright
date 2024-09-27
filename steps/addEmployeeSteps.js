const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { loginPage } = require('../../Test/CredencialesPOM');

let page;
let login;

Given('el usuario está en la página de login', async function () {
  page = await this.browser.newPage();
  login = new loginPage(page);
  await login.goToLoginPage();
});

When('el usuario ingresa el nombre de usuario {string} y la contraseña {string}', async function (username, password) {
  await login.login(username, password);
});

Then('el usuario debería ser redirigido a la página principal', async function () {
  await expect(page).toHaveURL('https://ejemplo.com/dashboard'); // Cambia esto a la URL real
});

// Nuevo paso para navegar a la sección PIM
When('el usuario navega a la sección {string}', async function (section) {
  await page.click(`text=${section}`); // Asegúrate de que el texto coincide con el que aparece en la UI
});

// Nuevo paso para seleccionar "Add Employee"
When('el usuario selecciona la opción "Add Employee"', async function () {
  await page.click('text=Add Employee'); // Asegúrate de que el texto coincide con el que aparece en la UI
});

Then('el usuario debería ver el formulario para agregar un nuevo empleado', async function () {
  await expect(page.locator('form#addEmployeeForm')).toBeVisible(); // Cambia el selector a uno adecuado para el formulario
});