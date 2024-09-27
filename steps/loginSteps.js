const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { loginPage } = require('../Test/CredencialesPOM');

let page;
let login;

Given('el usuario está en la página de login', async function () {
  page = await this.browser.newPage(); // Inicializa una nueva página
  login = new loginPage(page); // Crea una instancia de loginPage
  await login.goToLoginPage(); // Navega a la página de login
});

When('el usuario ingresa el nombre de usuario {string} y la contraseña {string}', async function (username, password) {
  await login.login(username, password); // Realiza el login con las credenciales
});

Then('el usuario debería ser redirigido a la página principal', async function () {
  await expect(page).toHaveURL('https://ejemplo.com/dashboard'); // Verifica que la URL sea la esperada
});