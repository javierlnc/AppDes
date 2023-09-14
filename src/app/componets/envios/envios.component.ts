import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent implements OnInit {
  remitente: FormGroup;
  constructor(bulder : FormBuilder){
    this.remitente = bulder.group({

    });

  }
  ngOnInit(): void {
  }
  onSubmit(form: any) : void{
    console.log("enviando el siguiente tiquete", form)

  }


}
