#language: en

Feature: Gestión de empleados en OrangeHRM

  Scenario: Iniciar sesión y agregar un nuevo empleado
    Given el usuario está en la página de login
    When el usuario ingresa el nombre de usuario "Admin" y la contraseña "admin123"
    Then el usuario debería ser redirigido a la página principal
    When el usuario navega a la sección "PIM"
    And el usuario selecciona la opción "Add Employee"
    Then el usuario debería ver el formulario para agregar un nuevo empleado