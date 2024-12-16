import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetNotificationService {

  constructor() { }
  success(title: string, text: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: text,
    });
  }

  error(title: string, text: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text,
    });
  }

  info(title: string, text: string) {
    Swal.fire({
      icon: 'info',
      title: title,
      text: text,
    });
  }

  warning(title: string, text: string) {
    Swal.fire({
      icon: 'warning',
      title: title,
      text: text,
    });
  }

  confirm(title: string, text: string, confirmButtonText: string = 'Yes', cancelButtonText: string = 'Yes') {
    return Swal.fire({
      title: title,
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
    });
  }
}
