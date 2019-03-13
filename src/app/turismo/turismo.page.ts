import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turismo',
  templateUrl: './turismo.page.html',
  styleUrls: ['./turismo.page.scss'],
})
export class TurismoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  turisticos: any[] =[
    {
      sitio:"Sierra Nevada",
      capital:"Bogota",
      habit:47000000,
      fotico: "sierraNevada.jpg"
    },
    {
      sitio:"Playa Coveñas",
      capital:"Caracas",
      habit:42000000,
      fotico: "covenas.jpg"
    }, 
    {
      sitio:"Isla del Rosario",
       capital:"Quito",
       habit: 35000000,
       fotico: "islaRosario.jpg"
    },
  ]

}
