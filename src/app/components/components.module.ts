import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportationComponent } from './importation/importation.component';
import { UploadComponent } from './upload/upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalImpotationComponent } from './modal-impotation/modal-impotation.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SelectTypeCampoComponent } from './select-type-campo/select-type-campo.component';



@NgModule({
  declarations: [ImportationComponent, UploadComponent, ModalImpotationComponent, SelectTypeCampoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SmartTableModule,
  ],
  entryComponents: [SelectTypeCampoComponent],
  exports: [ImportationComponent, UploadComponent]
})
export class ComponentsModule { }
