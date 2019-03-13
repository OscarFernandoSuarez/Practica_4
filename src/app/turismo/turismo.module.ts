import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TurismoPage } from './turismo.page';

const routes: Routes = [
  {
    path: '',
    component: TurismoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TurismoPage]
})

export class TurismoPageModule {
  //numeros: number[] = [
   // 3, 2, 5 ]

    turisticos: any[] =[
      {
        sitio:"Sierra Nevada",
        capital:"Bogota",
        habit:47000000,
        imagen: "col.png"
      },
      {
        sitio:"Cartagena de Indias",
        capital:"Caracas",
        habit:42000000,
        imagen: "ven.png"
      }, 
      {
        sitio:"Playas Coveñas",
         capital:"Quito",
         habit: 35000000,
         imagen: "ecu.png"
      },
    ]

}