import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../shared/dashboard/dashboard.component';
import { PagesContainerComponent } from './pages-container.component';


const pagesRoutes: Routes = [
    {
      path: '',
      component: PagesContainerComponent,
    //   canActivate: [LoginGuard],
      children: [
            {
              path: 'dashboard',
              component: DashboardComponent,
            //   data: { titulo: "Dashboard", tituloPadre: "Principal" },
            },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      ]
    },
];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
