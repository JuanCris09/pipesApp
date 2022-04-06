import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  constructor() { }
  //i18nSelect
  nombre: string = 'Juan';
  genero: string = 'masculino';

  invitacionMapa ={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria','Ana','Juan','Fernando','Erika'];
  ClientesMapa ={
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Ana';
    this.genero = 'femenino';
  }
  eliminarCliente(){
    this.clientes.splice(0,1); //tambien se puede con la funcion pop()
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Juan',
    edad:23,
    direccion: 'Ottawa, Canadá'
  }

  //JsonPipe
  heroes =[
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre:'Robin',
      vuela: false
    },
    {
      nombre:'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1000); //0,1,2,3,4,5,6,

  valorPromesa = new Promise((resolve, reject) =>{

    setTimeout(() =>{
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
