import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'tiquetes', loadChildren: () => import('./componets/tiquetes/tiquetes.module').then(m => m.TiquetesModule) },
    { path: 'envios', loadChildren: () => import('./componets/envios/envios.module').then(m => m.EnviosModule) }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
