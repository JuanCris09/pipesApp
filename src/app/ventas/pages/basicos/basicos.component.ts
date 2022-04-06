import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  
  nombreLower: string = 'juan pablo';
  nombreUpper: string = 'JUAN PABLO';
  nombreCompleto: string = 'jUan pABlo cRistAncho'

  fecha: Date = new Date(); //Fecha de hoy
  

}
