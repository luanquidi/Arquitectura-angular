import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalService } from '../../services/modal.service';
import { ImportationService } from '../../services/importation.service';
import { SelectTypeCampoComponent } from '../select-type-campo/select-type-campo.component';

@Component({
  selector: 'app-importation',
  templateUrl: './importation.component.html',
  styleUrls: ['./importation.component.css']
})
export class ImportationComponent implements OnInit {

  userKo: any;
  form: FormGroup;
  exists: boolean;
  @ViewChild('tableSmart') tableSmart: ElementRef;

  settings = {
    noDataMessage: 'No hay registros encontrados',
    attr: {
      class: 'tbl-usuarios'
    },
    actions: {
      columnTitle: '',
      position: 'right',
      delete: false,
      add: false,
      edit: false,
      // custom: [
      //   { name: 'Ver', title: '<span class="text-center"><i class="fas fa-eye" title="Ver Antecedentes"></i></span>' }
      // ],
    },
    delete: {
      deleteButtonContent: 'Eliminar'
    },
    pager: {
      display: true,
      perPage: 20
    },
    hideSubHeader: false,
    columns: {
      campoExcel: {
        title: 'CAMPO EXCEL'
      },
      tipoCampo: {
        title: 'TIPO CAMPO',
        type: 'custom',
        renderComponent: SelectTypeCampoComponent
      },
      nombreCampo: {
        title: 'NOMBRE CAMPO'
      },
    }
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private modalService: ModalService,
    public importationService: ImportationService
    // private alertService: AlertPersonalService,
  ) { }

  ngOnInit(): void {
    this.createFormGroup();
    console.log(this.tableSmart);
  }

  createFormGroup(): void {
    this.form = this.fb.group({
      // IdLegal: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15), Validators.pattern('^[0-9A-Za-zñÑ ._\-]*$')]],
      // FirstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ][A-Za-zñÑáéíóúÁÉÍÓÚ ]*$')]],
      // LastName1: ['', [Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ][A-Za-zñÑáéíóúÁÉÍÓÚ ]*$')]],
      // LastName2: ['', [Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ][A-Za-zñÑáéíóúÁÉÍÓÚ ]*$')]],
      // PersonDiligence: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern('^[0-9A-Za-zñÑáéíóúÁÉÍÓÚ# ]*$')]],
      // Observation: ['', [Validators.required, Validators.pattern('^[0-9A-Za-zñÑáéíóúÁÉÍÓÚ# ]*$')]],
      // FechaFalta: ['', Validators.required],
      Pais: ['', []],
      Cliente: ['', []],
      NombreFormato: ['', []],
      // FechaFalta: ['', Validators.required],
      // LoginPsicologa: ['', Validators.required],
    });
  }

  backView(): void {
    this.router.navigate(['/dashboard']);
  }

  showModalImportation(): void {
    this.modalService.showModal('modalImportation');
  }
  show(value): void {
    console.log(value);
  }

}
