import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  // Función que permite medieante la libreria sweetalert2 mostrar mensaje por el tipo
  showAlertSimpleByType(type: string, message: string, title: string): void {
    if (type === 'question'){
      Swal.fire(title, message, 'question');
    }
    if (type === 'info'){ Swal.fire( title,  message, 'info'); }
    if (type === 'success'){Swal.fire( title,  message, 'success' ); }
    if (type === 'error'){ Swal.fire(title, message, 'error' ); }
    if (type === 'warning'){ Swal.fire(title, message, 'warning' ); }
  }
}
