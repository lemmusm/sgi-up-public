import { Component, OnInit } from '@angular/core';
// auth-service
import { AuthafService } from '../../../providers/authaf.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  date = new Date();
  year = this.date.getFullYear();

  constructor(public afservice: AuthafService) {
  }

  ngOnInit() {
  }

  signIn() {
    this.afservice.signInWithGoogle();
  }
}
