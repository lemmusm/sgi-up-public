import { Component } from '@angular/core';
import { AuthafService } from './providers/authaf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private afservice: AuthafService) {
    this.afservice.verifyStatusInLogin();
  }
}
