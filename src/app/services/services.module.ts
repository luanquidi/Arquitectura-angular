import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCsvParserModule } from 'ngx-csv-parser';

// SERVICES
import { ModalService } from './modal.service';
import { DropifyService } from './dropify.service';
import { SweetAlertService } from './sweet-alert.service';
import { ImportationService } from './importation.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxCsvParserModule
  ],
  providers: [ModalService, DropifyService, SweetAlertService, ImportationService]
})
export class ServicesModule { }
