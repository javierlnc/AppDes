import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiquetes',
  templateUrl: './tiquetes.component.html',
  styleUrls: ['./tiquetes.component.css']
})
export class TiquetesComponent implements OnInit {
  ngOnInit(): void {
  }

  onSubmit(form: any) : void{
    console.log("enviando el siguiente tiquete", form)

  }
  destinos : String[] = ["caracoli", "bello","Medellin","Cualquiera","cualquiera dos"]

}
