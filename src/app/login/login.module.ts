import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,  RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', component: LoginComponent }
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule

  ]
})
export class LoginModule { }
