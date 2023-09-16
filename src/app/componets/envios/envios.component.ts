import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {
  remitente: FormGroup;
  destinos : String[] = ["caracoli", "bello","Medellin","Cualquiera","cualquiera dos"]
  constructor(bulder : FormBuilder){
    this.remitente = bulder.group({
      'cedula':'',
      'nombre':'',
      'telefono':'',
      'origen':''
    });


  }
  ngOnInit(): void {
  }
  onSubmit(value: String) : void{
    console.log("enviando el siguiente tiquete", value)

  }


}
