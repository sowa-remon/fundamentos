import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  nombre:string = 'Javier';
  apellido:string = 'Vázquez';
  calif:number = 5;
  encendido:boolean = true;

  personas:string[] = ["Miguel", "Erick", "Diana", "Gaby"];
  constructor(){
    }
    
  cambiarValores(){
    this.nombre = 'Emiliano';
    this.calif = 10;
    }
}
