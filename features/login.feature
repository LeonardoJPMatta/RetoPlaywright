#language: en

Feature: Login de usuario

  Scenario: Iniciar sesión con credenciales válidas
    Given el usuario está en la página de login
    When el usuario ingresa el nombre de usuario "Admin" y la contraseña "admin123"
    Then el usuario debería ser redirigido a la página principal

    