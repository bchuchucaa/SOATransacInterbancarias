import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moneda } from 'src/app/model/moneda';
import { TransaccionesService } from 'src/app/services/transacciones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  active = 'top';
  credenciales: any;
  idPersona: string = "";
  nombreCliente: string = "";
  cuentaObj: any;
  cuentaJson: string = "";
  numCuenta: string = "";
  resultConvert: string = "";
  tmpConvert: any;
  monedas:any;
  monedero:Array<Moneda>= new  Array;
  clave:Array<Object>= new Array;
  constructor(private transaccions: TransaccionesService, private router: Router) {
    this.credenciales = localStorage.getItem("usuario");
    var json = JSON.parse(this.credenciales);
    this.idPersona = json["0"].id;
    this.nombreCliente = json["0"].nombre + json["0"].apellido;
    this.transaccions.recuperarCuentaUsuario(this.idPersona);
    this.cuentaObj = localStorage.getItem("cuentaUsuario");
    var cuentajson = JSON.parse(this.cuentaObj);
    this.numCuenta = cuentajson["0"].numero_cuenta;
    transaccions.getAllTransacctions(this.numCuenta);
    this.transaccions.getMonedas();
   
    this.monedas=localStorage.getItem("monedas");
    let jsonmonedas= JSON.parse(this.monedas);
    console.log(jsonmonedas.conversion_rates);
    this.clave=Object.keys(jsonmonedas);
    let counter=1;
    for(var i in jsonmonedas.conversion_rates){   
      if(counter<5){
        let m= new Moneda();
        console.log(i.valueOf());
        m.valor=i.valueOf();
        this.monedero.push(m);
      } 
      counter++;
    }
      
  
    console.log("idPersonaid", this.idPersona);
  }

  ngOnInit(): void {
  }

  transferencia(valor: string, numCuenta: string, entidad: string, nombreDestino: string, comentario: string) {
    console.log("values to transfer ", valor, numCuenta, this.idPersona, nombreDestino, comentario);
    if (confirm("¿Estas seguro de realizar esta transaccion?")) {
      try {
        this.transaccions.transaciones(valor, numCuenta, this.idPersona, entidad, nombreDestino, comentario);
        alert("Se ha realizado con exito su transaccion :) ");
      } catch (error) {
        console.log(error);
        alert("ALGO SALIO MAL EN TU TRANSACCION INTENTALO DE  NUEVO MAS TARDE");
      }
    }


  }
  clearSession() {
    localStorage.clear();
    this.router.navigate(["../logIn"]);
  }
  convert(valor: string) {
    this.transaccions.convertCurrency(valor);
    this.tmpConvert = localStorage.getItem("conversion");
    var tmpConvertJSON = JSON.parse(this.tmpConvert);
    this.resultConvert = tmpConvertJSON.conversion_result;
    console.log(tmpConvertJSON);
    console.log("value converted", tmpConvertJSON.conversion_result);
    localStorage.removeItem("conversion");
    
  }
}
