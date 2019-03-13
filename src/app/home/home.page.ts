import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //numeros: number[] = [
   // 3, 2, 5 ]

    paises: any[] =[
      {
        pais:"Colombia",
        capital:"Bogota",
        habit:47000000,
        imagen: "col.png"
      },
      {
        pais:"Venezuela",
        capital:"Caracas",
        habit:42000000,
        imagen: "ven.png"
      }, 
      {
        pais:"Ecuador",
         capital:"Quito",
         habit: 35000000,
         imagen: "ecu.png"
      },
    ]

}

