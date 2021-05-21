import { Component, OnInit } from '@angular/core';
import { TransaccionesService } from 'src/app/services/transacciones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  active = 'top';
  credenciales:any;
  idPersona:string= "";
  constructor(private transaccions:TransaccionesService) {
    this.credenciales=localStorage.getItem("usuario");
    var json=JSON.parse(this.credenciales);
    this.idPersona=json["0"].id;
    console.log("idPersonaid",this.idPersona);
   }

  ngOnInit(): void {
  }

  transferencia(valor:string,numCuenta:string,entidad:string){
    console.log("values to transfer ",valor,numCuenta,this.idPersona);
    this.transaccions.transaciones(valor,numCuenta,this.idPersona,entidad);
  }

  //
}
