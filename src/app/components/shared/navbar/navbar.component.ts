import { Component, OnInit } from '@angular/core';
// auth service
import { AuthafService } from '../../../providers/authaf.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  // info user from firebase
  public user_name: string;
  public user_email: string;
  public user_photo: string;

  constructor(public afs: AuthafService) {
    this.afs.afservice.authState.subscribe(auth => {
      if (auth == null) {
        this.user_name = '';
        this.user_email = '';
      } else {
        this.user_name = auth.displayName;
        this.user_email = auth.email;
        this.user_photo = auth.photoURL;
      }
    });
  }

  signOut() {
    this.afs.signOut();
  }
  ngOnInit() { }
}
