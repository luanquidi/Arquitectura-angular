import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { SweetAlertService } from './sweet-alert.service';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { ModalService } from './modal.service';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ImportationService {
  file: File[];
  header = false;
  csvRecords: any[] = [];
  structureOfCsv: any;
  data: {};
  @ViewChild('tableSmart') tableSmart: ElementRef;

  constructor(
    private sweettService: SweetAlertService,
    private ngxCsvParser: NgxCsvParser,
    private modalService: ModalService
  ) { }

  // tslint:disable-next-line: typedef
  async uploadFileAndValidate(idModal: string) {
    // Función para validar lista de candidatos mediante archivo de excel, para determinar si es apto o no apto
    if (!this.file) {
      return;
    }
    if (this.file.length > 0) {
      if (!this.validateFileExtension(this.file, 'csv')) {
        this.sweettService.showAlertSimpleByType('error', 'El formato del fichero o la extensión del fichero no es valido', '');
        return;
      }
      this.sweettService.showAlertSimpleByType('success', 'El fichero es valido', '');
      this.modalService.hideModal(idModal);
    }
  }

  validateFileExtension(file: File[], extensionValid: string): boolean {
    // Validar solo extensiones validas.
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < file.length; i++) {
      const extension = file[i].name.split('.');
      if (extension[extension.length - 1] !== extensionValid) {
        return false;
      }
    }
    return true;
  }

  // tslint:disable-next-line: typedef
 fileChangeListener() {
    // Select the files from the event
    const files = this.file;
    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ';' })
      .pipe().subscribe((result: Array<any>) => {
        // console.log('Result', result[0]);
        this.structureOfCsv = result[0];
        this.buildDataFromCSV();
        this.csvRecords = result;
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
    });
  }

  // tslint:disable-next-line: typedef
  buildDataFromCSV(): void {
    const structureTable = [];
    // tslint:disable-next-line: no-shadowed-variable
    this.structureOfCsv.map((element: any) => {
      structureTable.push({campoExcel: element, tipoCampo: 'normal', nombreCampo: element});
    });

    this.data = structureTable;
  }
}
