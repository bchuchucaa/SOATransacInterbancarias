import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  nombreCliente:string="";
  cuentaObj: any;
  cuentaJson: string = "";
  numCuenta: string = "";
  constructor(private transaccions:TransaccionesService,private router:Router) {
    this.credenciales=localStorage.getItem("usuario");
    var json=JSON.parse(this.credenciales);
    this.idPersona=json["0"].id;
   this.nombreCliente=json["0"].nombre+json["0"].apellido;
    this.transaccions.recuperarCuentaUsuario(this.idPersona);
    this.cuentaObj = localStorage.getItem("cuentaUsuario");
    var cuentajson = JSON.parse(this.cuentaObj);
    this.numCuenta = cuentajson["0"].numero_cuenta;
    transaccions.getAllTransacctions(this.numCuenta);
    console.log("idPersonaid",this.idPersona);
   }

  ngOnInit(): void {
  }

  transferencia(valor:string,numCuenta:string,entidad:string,nombreDestino:string,comentario:string){
    if(confirm("¿Estas seguro de realizar esta transaccion?")){
      console.log("values to transfer ",valor,numCuenta,this.idPersona,nombreDestino,comentario);
    this.transaccions.transaciones(valor,numCuenta,this.idPersona,entidad,nombreDestino,comentario);
    }
    
  }
  clearSession(){
    localStorage.clear();
    this.router.navigate(["../logIn"]);
  }
}
