# RetoPlaywright
QA Automation - Leonardo JP Matta
GUIA DE INSTALACION 
Configuracion de PlayWright
-	Abrir el IDE de su preferncia en este caso estamos usando Visual Studio 
-	Abrir una carpeta vacia donde se creara el proyecto: File/Open Folder/ Seleccionar la carpeta de proyecto
-	Agregar las siguientes extensiones: 
       o	Playwright Test for VSCode
       o	Playwright Runner
-	Abrir el terminal de Visual Studio e ingresar las siguientes instrucciones:
       o	Escribimos el comando “npm init playwright@latest”
       o	Seleccionamos JavaScript como lenguaje.
       o	Seleccionamos la carpeta donde se guardarán los archivos de test, aquí dejamos por defecto la carpeta tests
       o	Indicamos si queremos añadir alguna acción de GitHub 
       o	Indicamos que queremos instalar los navegadores de playwright y decimos que si (true).
-	Se crearán las siguientes carpetas del proyecto:
       o	playwright.config.js: Archivo de configuración.
       o	tests/: Carpeta donde se guardarán los ficheros con las pruebas
       o	example.spec.js: Fichero de pruebas, se debe mantener la nomenclatura {nombre}.spec.js para que Playwright lo pueda identificar correctamente.
       o	tests-examples/: Borramos esta carpeta
       o	demo-todo-app.spec.js:  Este archivo se borrara al eliminar la carpeta anterior
-	Abrimos el archivo playwright.config.js y añadimos lo siguiente: 
       o	fullyParallel: con valor “true” se paraleliza cada prueba en una sesión diferente.
       o	reporter: generador de informes, por defecto en “html” hará que después de cada ejecución se abra una pestaña local con el informe. Aconsejo cambiarlo a “reporter: [['list'],['html', {open: 'never',host: '0.0.0.0',port: 9223,}]]”
       o	baseURL: Colocamos la página que automatizaremos.
-	Aquí ya tendremos todo lo necesario para iniciar nuestra automatización

-----------------------------------------------------------------------------

GUIA DE USO 
1.   Ingresar a Terminal
2. Ingresar a New Terminal
3. Ejecutar el comando de test:
       -	npx playwright test –headed
4.	Ejecutar el comando de reporte:
       -	npx playwright show-report --host 0.0.0.0 --port 9223

------------------------------------------------------------------------------

Casos de Prueba para la Funcionalidad de Login
1. CP01 - Login exitoso con credenciales válidas
       o	Descripción: Verificar que un usuario puede iniciar sesión con credenciales correctas.
       o	Pasos:
              1.	Ir a la página de login.
              2.	Rellenar el campo de usuario con un nombre válido.
              3.	Rellenar el campo de contraseña con la contraseña correcta.
              4.	Hacer clic en "Iniciar sesión".
       o	Resultado Esperado: El usuario es redirigido a la página de inicio y ve un mensaje de bienvenida.

2. CP02 - Login fallido con contraseña incorrecta
       o	Descripción: Verificar que el login falla si la contraseña es incorrecta.
       o	Pasos:
              1.	Ir a la página de login.
              2.	Rellenar el campo de usuario con un nombre válido.
              3.	Rellenar el campo de contraseña con una contraseña incorrecta.
              4.	Hacer clic en "Iniciar sesión".
       o	Resultado Esperado: Mostrar un mensaje de error indicando "Credenciales incorrectas".

3. CP03 - Login fallido con usuario incorrecto
       o	Descripción: Verificar que el login falla si el usuario es incorrecto.
       o	Pasos:
              1.	Ir a la página de login.
              2.	Rellenar el campo de usuario con un nombre incorrecto.
              3.	Rellenar el campo de contraseña con una contraseña válida.
              4.	Hacer clic en "Iniciar sesión".
       o	Resultado Esperado: Mostrar un mensaje de error indicando "Credenciales incorrectas".

4. CP04 - Login fallido con campos vacíos
       o	Descripción: Verificar que el login falla si se dejan los campos vacíos.
       o	Pasos:
              1.	Ir a la página de login.
              2.	Dejar los campos de usuario y contraseña vacíos.
              3.	Hacer clic en "Iniciar sesión".
       o	Resultado Esperado: Mostrar mensajes de error para cada campo vacío.

5. CP05 - Login con campo de usuario demasiado largo
       o	Descripción: Verificar que el login falla si el nombre de usuario excede la longitud máxima permitida.
       o	Pasos:
              1.	Ir a la página de login.
              2.	Rellenar el campo de usuario con un nombre excesivamente largo.
              3.	Rellenar el campo de contraseña y hacer clic en "Iniciar sesión".
       o	Resultado Esperado: Mostrar un mensaje de error indicando que el nombre de usuario es demasiado largo.

6. CP06 - Login con contraseña demasiado corta
       o	Descripción: Verificar que el login falla si la contraseña es demasiado corta.
       o	Pasos:
              1.	Ir a la página de login.
              2.	Rellenar el campo de usuario con un nombre válido.
              3.	Rellenar el campo de contraseña con una contraseña corta.
              4.	Hacer clic en "Iniciar sesión".
       o	Resultado Esperado: Mostrar un mensaje de error indicando que la contraseña no cumple con los requisitos.

7. CP07 - Login exitoso con opción "Recordar sesión"
       o	Descripción: Verificar que la opción "Recordar sesión" funciona correctamente.
       o	Pasos:
              1.	Ir a la página de login.
              2.	Rellenar los campos con credenciales válidas.
              3.	Marcar la opción "Recordar sesión".
              4.	Hacer clic en "Iniciar sesión".
              5.	Cerrar y volver a abrir el navegador.
       o	Resultado Esperado: El usuario debe permanecer logueado sin necesidad de ingresar nuevamente las credenciales.

8. CP08 - Login fallido con cuenta bloqueada
       o	Descripción: Verificar que el login falla si la cuenta está bloqueada.
       o	Pasos:
              1.	Ir a la página de login.
              2.	Rellenar el campo de usuario con un nombre de cuenta bloqueada.
              3.	Rellenar el campo de contraseña y hacer clic en "Iniciar sesión".
       o	Resultado Esperado: Mostrar un mensaje de error indicando que la cuenta está bloqueada.

Casos de Prueba para "Add Employee"

9. CP01 - Agregar un Empleado con Éxito
       o	Descripción: Verificar que un usuario puede agregar un nuevo empleado con     todos los datos válidos.
       o	Precondición: El usuario debe estar autenticado y en la página de "Add Employee".
       o	Pasos:
              1.	Navegar a la sección "PIM".
              2.	Seleccionar "Add Employee".
              3.	Ingresar todos los campos obligatorios (nombre, apellido, ID de empleado).
              4.     Hacer clic en "Save".
       o	Resultado Esperado: El sistema muestra un mensaje de éxito y el nuevo empleado aparece en la lista de empleados.
10. CP02 - Agregar un Empleado sin Nombre
       o	Descripción: Verificar que no se puede agregar un empleado sin proporcionar un nombre.
       o	Precondición: El usuario debe estar autenticado y en la página de "Add Employee".
       o	Pasos:
              1.	Navegar a la sección "PIM".
              2.	Seleccionar "Add Employee".
              3.	Dejar el campo de nombre vacío.
              4.     Ingresar un apellido y un ID de empleado.
              5.     Hacer clic en "Save".
       o	Resultado Esperado: El sistema muestra un mensaje de error indicando que el campo de nombre es obligatorio.
11. CP03 - Agregar un Empleado sin Apellido
       o	Descripción: Verificar que no se puede agregar un empleado sin proporcionar un apellido.
       o	Precondición: El usuario debe estar autenticado y en la página de "Add Employee".
       o	Pasos:
              1.	Navegar a la sección "PIM".
              2.	Seleccionar "Add Employee".
              3.	Ingresar un nombre y un ID de empleado.
              4.     Dejar el campo de apellido vacío.
              5.     Hacer clic en "Save".
       o	Resultado Esperado: El sistema muestra un mensaje de error indicando que el campo de apellido es obligatorio.
12. CP04 - Agregar un Empleado con ID de Empleado Duplicado
       o	Descripción: Verificar que no se puede agregar un empleado con un ID de empleado que ya existe.
       o	Precondición: El usuario debe estar autenticado y en la página de "Add Employee". Ya debe existir un empleado con el mismo ID.
       o	Pasos:
              1.	Navegar a la sección "PIM".
              2.	Seleccionar "Add Employee".
              3.	Ingresar un nombre, un apellido y un ID de empleado que ya existe.
              4.     Hacer clic en "Save".
       o	Resultado Esperado: El sistema muestra un mensaje de error indicando que el ID de empleado ya está en uso.
13. CP05 - Agregar un Empleado con Datos Incompletos
       o	Descripción: Verificar que el sistema maneja adecuadamente la situación en que se ingresan datos incompletos.
       o	Precondición: El usuario debe estar autenticado y en la página de "Add Employee".
       o	Pasos:
              1.	Navegar a la sección "PIM".
              2.	Seleccionar "Add Employee".
              3.	Ingresar un nombre y dejar otros campos vacíos.
       o	Resultado Esperado: El sistema muestra mensajes de error indicando que los campos obligatorios deben ser completados.
14. CP06 - Verificar el Comportamiento de la Interfaz de Usuario
       o	Descripción: Verificar que todos los elementos de la interfaz de usuario en la página "Add Employee" se cargan correctamente.
       o	Precondición: El usuario debe estar autenticado y en la página de "Add Employee".
       o	Pasos:
              1.	Navegar a la sección "PIM".
              2.	Seleccionar "Add Employee".
       o	Resultado Esperado: Todos los campos de entrada, botones y mensajes de ayuda deben estar visibles y correctamente etiquetados.

--------------------------------------------------------------------------------------------

Técnica de diseño de casos de prueba

Particionamiento de equivalencia
Esta técnica consiste en dividir el conjunto de entradas posibles en clases de equivalencia, de tal forma que se asuma que si un valor de una clase es correcto, todos los demás valores de esa clase también lo serán. En el caso del login, se pueden identificar varias clases:
      1.	Credenciales válidas:
               o	Usuario y contraseña correctos.
      2.	Credenciales inválidas:
               o	Usuario correcto, contraseña incorrecta.
               o	Usuario incorrecto, contraseña correcta.
               o	Usuario y contraseña incorrectos.
      3.	Campos vacíos:
               o	Usuario vacío y contraseña vacía.
               o	Usuario vacío y contraseña llena.
               o	Usuario lleno y contraseña vacía.
Además del particionamiento de equivalencia, se pueden utilizar otras técnicas como:
•	Análisis de valores límite: Probar los límites de longitud de los campos.



