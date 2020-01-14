# Sistema de Gestión Integral | Universidad Politécnica de Pénjamo

Proyecto generado con el framework Angular https://angular.io/, para la autenticación se usa la API de Firebase https://firebase.google.com/.

## Proyecto

Clona este repositorio, ejecuta el comando `npm install`, después de esto corre en local con el siguiente comando `ng serve`.

Para generar el proyecto para producción el siguiente comando `ng build --prod --build-optimizer`

## Dependencias

* [AngularFire2](https://github.com/angular/angularfire2)
    * AngularFireModule
    * AngularFireAuthModule
* [SweetAlert2](https://sweetalert2.github.io/)

## Documentación

El usuario accede en local http://localhost:4200 o producción http://sgi.uppenjamo.edu.mx donde se le solicitará la autenticación mediante el correo institucional.

Al presionar el botón para acceder, se ejecuta el método `signIn()` que a su vez a través del servicio `AuthafService` llama al método `signInWithGoogle()`, donde se realiza toda la lógica para el acceso al sistema.

### AuthafService ###

En este servicio es donde se realiza toda la lógica para el acceso al sistema.

##### Variables #####

    login = false; // Se usa para el ocultar/visualizar elementos cuando se esta  logueado.

    numeros = '0123456789'; // Para comprobar si el usuario obtenido del correo electrónico es un alumno.

    email: string; // Almacena el email traido desde firebase.

##### Contructor #####
A traves de variables se hace uso de módulos para el uso dentro de la lógica de la autenticación.

#### Método `signInWithGoogle()` ####

Aquí se realiza la comprobación mediante Firebase para dar acceso por correo electrónico institucional al sistema.

Como filtro, se usa el método `setCustomParameters` para indicar que solo los correos con dominio `uppenjamo.edu.mx` están permitidos.

Si el correo es parte de este dominio, el usuario será redirigido a la ruta `dashboard` a través del módulo Router traido mediante una variable desde el constructor, de lo contrario, aparecerá un error lanzado por medio del servicio `AlertService` que tambien se llamda desde el contructor.

#### Método `signOut()` ####

Al lanzar este método se cierra sesión y redirige a la vista login.

#### Método `isAuth()` ####

Comprueba si el usuario se encuentra logueado y es usado por `AuthGuardService` para denegar acceso a las rutas en caso de que algún usuario deseara acceder a alguna ruta en especifico sin antes haber comprobado el acceso.

#### Método `verifyStatusInLogin()()` ####

Es un método parecido al anterior, sin embargo, este es usado para comprobar que el usuario este logueado. Si está logueado cambia el valor de la variable login a true para mostrar el componente navbar, asigna valor a la variable email y ejecuta el método `isAlumno()` de lo contrario redirige al componente login y cambia el valor de la variable login a false.

#### Método `isAlumno()` ####

Una vez que el usuario esta logueado se substrae de la variable email mediante el método `indexOf()` todo lo que se encuentre desde la posición 0 hasta donde encuentre el caracter `@`, obteniendo de esta manera el usuario que corresponde al correo electrónico.

Este valor se asigna a la constante user y se comprueba si este valor contiene números, usando `numeros` la variable declarada desde un principio.

Se recorren todos los caracteres del valor de la constante user, si encuentrá números en este valor, se deniega el acceso al usuario (alumno), debido a que los correos de los alumnos esta compuesto solo por números y el acceso al sistema para ellos es denegado.

### AlertService ###

Se hace uso de la dependencia SweetAlert2 para lanzar modals.

Se crean dos métodos:

#### Método `minimalAlert(message)` ####

Este método lleva un parámetro el cual es usado como argumento al llamar al método `Swal()` propio de SweetAlert, el argumento recibido por el método `minimalAlert()` deberá ser de tipo string.

#### Método `simpleAlert(title, text, type, footer)` ####

Este método lleva varios parámetros los cuales son usados como argumentos al llamar al método `Swal()` propio de SweetAlert.

Los argumentos que deberá recibir los parametros title, text y footer serán de tipo string para el caso de type, este puede recibir los siguientes valores: `'success', 'error', 'info', 'warning', 'question'`.

### Navbar ###

Se usa la directiva  `[hidden]` de Angular para ocultar o mostrar el componente dependiendo del valor de la variable login, que esta declarada en AuthafService.

Se comprueba si el usuario esta logueado, si es así asigna valor desde firebase a las variables `user_name, user_email y user_photo` para ser usados en la vista.

### Desarrollado por: ####

* Manuel Hernández Lemus
* [Twitter: lemmusm](https://twitter.com/lemmusm)
* Email: lemmusm@gmail.com
