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
      'cedularRemitente':'',
      'nombreRemitente':'',
      'telefonoRemitente':'',
      'origen':'',
      'cedulaDestinatario':'',
      'nombreDestinatario':'',
      'telefonoDestinatario':'',
      'destino':'',
      'tipo':'',
      'peso':'',
      'medidaX':'',
      'medidaY':'',
      'medidaZ':'',
      'contenido':'',
      'valorDeclarado':'',
      'seguro':'',
      'flete':'',
    });


  }
  ngOnInit(): void {
  }
  onSubmit(value: String) : void{
    console.log("enviando el siguiente tiquete", value)

  }


}
