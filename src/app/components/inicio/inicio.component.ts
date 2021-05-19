import { Component, OnInit } from '@angular/core';
import { TransaccionesService } from 'src/app/services/transacciones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  credenciales:any;
  idPersona:string= "";
  constructor(private transaccions:TransaccionesService) {
    this.credenciales=localStorage.getItem("usuario")?.toString();
    var json=JSON.parse(this.credenciales);
    console.log(json);
    this.idPersona=json["0"].id;
   }

  ngOnInit(): void {
  }

  debitar(valor:string,numCuenta:string){
    console.log("values to transfer ",valor,numCuenta,this.idPersona);
    this.transaccions.debitar(valor,numCuenta,this.idPersona);
  }

}
