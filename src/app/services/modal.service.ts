import { Injectable } from '@angular/core';
declare var $;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  idJquery = '';
  constructor() { }


  // Modal que funciona por medio de jquery
  showModal(id: string): void {
    this.idJquery = `#${id}`;
    $(this.idJquery).modal({ backdrop: 'static', keyboard: false });
  }

  hideModal(id: string): void {
    this.idJquery = `#${id}`;
    $(this.idJquery).modal('hide');
  }
}
