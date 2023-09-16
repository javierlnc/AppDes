import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Viajero } from 'src/app/models/viajero';

@Component({
  selector: 'app-tiquetes',
  templateUrl: './tiquetes.component.html',
  styleUrls: ['./tiquetes.component.css']
})
export class TiquetesComponent implements OnInit {
  destinos : String[] = ["caracoli", "bello","Medellin","Cualquiera","cualquiera dos"];
  tiquete : FormGroup;

  constructor(private fb : FormBuilder){
    
    this.tiquete = this.fb.group({
      cedula: '',
      nombre : '',
      celular : '',
      origen : '',
      destino: '',
      vehiculo: '',
      silla: '',
      precio: '',
  
    });
  }

  ngOnInit(): void {
  }

  onSubmit(value: String) : void{
    console.log("enviando el siguiente tiquete", value)

  }
  
}
