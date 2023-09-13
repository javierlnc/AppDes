import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TiquetesComponent } from './tiquetes.component';

export const routes: Routes = [
  { path: '', component: TiquetesComponent }
];


@NgModule({
  declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
})
export class TiquetesModule { }
