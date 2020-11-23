import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PAGES_ROUTES } from './pages.routes';
import { PagesContainerComponent } from './pages-container.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PagesContainerComponent
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule
  ]
})
export class PagesModule { }
