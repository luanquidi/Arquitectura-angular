import { Routes , RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const appRoutes: Routes = [
    {path: 'login' , component: LoginComponent},
    // { path: 'loginIntranet/:idSesion', component: LoginComponent },
    {path: '**' , component: NopagefoundComponent}
];

// tslint:disable-next-line:comment-format
//forRoot : utilizado para rutas principales
export const APP_ROUTES = RouterModule.forRoot(appRoutes , {useHash: true});
