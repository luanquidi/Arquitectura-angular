import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../shared/dashboard/dashboard.component';
import { PagesContainerComponent } from './pages-container.component';
import { ImportationComponent } from '../components/importation/importation.component';
import { UploadComponent } from '../components/upload/upload.component';


const pagesRoutes: Routes = [
    {
      path: '',
      component: PagesContainerComponent,
    //   canActivate: [LoginGuard],
      children: [
            {
              path: 'dashboard',
              component: DashboardComponent,
              data: { titulo: 'Dashboard', tituloPadre: 'Principal' },
            },
            {
              path: 'importation',
              component: ImportationComponent,
              data: { titulo: 'Importación Emergia', tituloPadre: 'Importación' },
            },
            {
              path: 'upload',
              component: UploadComponent,
              data: { titulo: 'Cargue Emergia', tituloPadre: 'Cargue' },
            },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      ]
    },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
