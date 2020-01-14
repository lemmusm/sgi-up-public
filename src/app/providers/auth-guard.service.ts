import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthafService } from './authaf.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authService: AuthafService) { }

  canActivate() {
    return this.authService.isAuth();
  }
}
