import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

/*
|--------------------------------------------------------------------------
| Authentication Feature Routes
|--------------------------------------------------------------------------
*/

export const authRoutes: Routes = [
  {
    path:'',
    loadComponent:()=>import('./pages/login/login.component').then((component)=>component.LoginComponent)
  }
];
