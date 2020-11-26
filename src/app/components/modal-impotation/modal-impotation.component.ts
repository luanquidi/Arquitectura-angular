import { Component, OnInit } from '@angular/core';
import { DropifyService } from 'src/app/services/dropify.service';
import { ModalService } from 'src/app/services/modal.service';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { ImportationService } from '../../services/importation.service';

@Component({
  selector: 'app-modal-impotation',
  templateUrl: './modal-impotation.component.html',
  styleUrls: ['./modal-impotation.component.css']
})
export class ModalImpotationComponent implements OnInit {

  fichero: File[];
  dropify: any;

  constructor(
    public modalService: ModalService,
    private dropifyService: DropifyService,
    public importationService: ImportationService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.iniciarDropify();
  }

  iniciarDropify(): void {
    setTimeout(() => {
      this.dropifyService.construirComponenteDropify('importation');
    }, 100);
  }

  hideModal(): void {
    // Función para cerrar el modal del Dropify
    this.modalService.hideModal('modalImportation');
  }
}
