import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Persona } from '../model/persona';
import { Observable } from 'rxjs';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
  bancoOrigen: any;
  constructor(private http: HttpClient) {

    this.bancoOrigen = localStorage.getItem("bancoOrigen")?.toString;
  }

  //METODO PARA LOGUEAR AL USUARIO DEPENDIENDO EL BANCO
  async login(usuario: string, password: string, entidad: string) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "usuario": usuario,
      "password": password
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };
    fetch(`http://localhost:8081/loginSystem?entidad=${entidad}`, requestOptions)
      .then(response => response.text().then(function (text) { localStorage.setItem("usuario", text) }))
      .then(result => console.log('CuentaOrigen', result))
      .catch(error => console.log('error', error));
    console.log("json values " + localStorage.getItem("usuario"));
  }
  //METODO PARA RECUPERAR LA CUENTA DEL CLIENTE

  recuperarCuentaUsuario(idPersona: string) {
    console.log("pagina mi cuenta id P" + idPersona);
    console.log("bancoOrigen", localStorage.getItem("bancoOrigen"));
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "idPersona": parseInt(idPersona)
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };

    fetch(`http://localhost:8081/miCuenta?entidad=${localStorage.getItem("bancoOrigen")}`, requestOptions)
    .then(response => response.text().then(function (text) { localStorage.setItem("cuentaUsuario", text) }))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    console.log("CuentaRecuperada" + localStorage.getItem("cuentaUsuario"));

  }

  //METODO PARA OPERACIONES
  transaciones(valor: string, numCuenta: string, idPersona: string, entidad: string) {
    console.log("PERSPONA ORIGEN ID ", idPersona);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "valor": valor,
      "numeroCuenta": numCuenta,
      "idPersona": idPersona

    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };
    console.log("TRYING TO DO + OPERATION TO" + entidad);
    fetch(`http://localhost:8081/${entidad}/?operacion=sumar`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    console.log("json values " + localStorage.getItem("usuario"));
    this.debitar(valor,idPersona);
  }

  //DEBITO DE LA CUENTA POR TRANSFERENCIA

  debitar(valor:string,idPersona:string){
    console.log("Cuenta origen NUMERO",localStorage.getItem("cuentaUsuario"));
    var cuentaObj:any;

   cuentaObj=localStorage.getItem("cuentaUsuario");
    let cuentajson=JSON.parse(cuentaObj);
    var myHeaders = new Headers();
    let numeroCuentaOrigen=cuentajson[0].numero_cuenta;
    console.log("Cuenta a depositar "+numeroCuentaOrigen);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "valor": valor,
      "numeroCuenta": cuentajson[0].numero_cuenta,
      "idPersona": idPersona
    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };
    if (localStorage.getItem("bancoOrigen") == "jep") {

      fetch(`http://localhost:8081/transaccionJep/?operacion=restar`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    } else {
      fetch(`http://localhost:8081/transaccionesBancoAustro/?operacion=restar`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  }



}
