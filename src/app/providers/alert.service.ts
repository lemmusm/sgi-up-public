import { Injectable } from '@angular/core';
// sweetalert2
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  minimalAlert(message: any) {
    Swal(message);
  }

  simpleAlert(title: any, text: any, type: any, footer: any) {
    Swal({
      title, text, type, footer
    });
  }
}
