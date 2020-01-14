import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
// import 'firebase/auth';
import { Router } from '@angular/router';
// sweetalert2
import Swal from 'sweetalert2';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthafService {
  // variable login component
  login = false;
  numeros = '0123456789';
  email: string;
  // use info user from firebase
  // user: Observable<firebase.User>;

  constructor(public afservice: AngularFireAuth, private router: Router, public alert: AlertService) {
    this.isAuth();
  }

  // Verifica el status del login y oculta/muestra componentes
  verifyStatusInLogin() {
    this.afservice.authState.subscribe(auth => {
      if (auth) {
        this.login = true;
        this.email = auth.email;
        this.isAlumno();
        // print status user
        // console.log(auth);
      } else {
        this.router.navigate(['/login']);
        this.login = false;
        // print status user
        // console.log(auth);
      }
    });
  }
  // Comprueba si la mátricula proviene de un alumno
  isAlumno() {
    // Obtiene el mail desde firebase y lo guarda en la variable, subtrae solo el usuario del correo
    const user = this.email.substring(0, this.email.indexOf('@'));
    switch (user) {
      case '216030383':
        this.alert.simpleAlert('¡AVISO!', 'ACCESO TEMPORAL', 'warning', '');
        break;
      case '216030057':
        this.alert.simpleAlert('¡AVISO!', 'ACCESO TEMPORAL', 'warning', '');
        break;
      default:
        for (let i = 0; i < user.length; i++) {
          if (this.numeros.indexOf(user.charAt(i), 0) !== -1) {
            this.signOut();
            this.router.navigate(['/login']);
            this.alert.simpleAlert('Acceso denegado', 'USUARIO NO AUTORIZADO', 'error', 'Reportar problema a mhernandez@uppenjamo.edu.mx');
            return 1;
          }
        }
        return 0;
    }
  }

  isAuth() {
    return this.afservice.authState
      .pipe(
        map(fbUser => {
          if (fbUser == null) {
            this.router.navigate(['/login']);
          }
          return fbUser != null;
        })
      );
  }
  // Método para iniciar sesión
  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('email');
    provider.setCustomParameters({ hd: 'uppenjamo.edu.mx' });
    this.afservice.auth
      .signInWithPopup(provider)
      .then(data => {
        this.router.navigate(['']);
        // this.alert.minimalAlert('Bienvenido a la Norma ISO 9001:2015');
      })
      .catch(error => {
        this.alert.simpleAlert('Error: ', error.message, 'error', 'code: ' + error.code);
      });
  }
  // Método para cerrar sesión
  signOut() {
    this.afservice.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
