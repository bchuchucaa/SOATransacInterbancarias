import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Persona } from '../model/persona';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
  bancoOrigen:any;
  constructor(private http: HttpClient) { 

    this.bancoOrigen=localStorage.getItem("bancoOrigen")?.toString;
  }
 
//METODO PARA LOGUEAR AL USUARIO DEPENDIENDO EL BANCO
  async login(usuario: string, password: string,entidad:string) {
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
      .then(response => response.text().then(function(text){localStorage.setItem("usuario",text)}))
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    console.log("json values " +localStorage.getItem("usuario"));
  }
  //METODO PARA DEBITAR DE UNA CUENTA
  debitar(valor:string,numCuenta:string,idPersona:string){
  
  }
  //METODO PARA OPERACIONES
  transaciones(valor:string,numCuenta:string,idPersona:string,entidad:string){
    console.log("PERSPONA ORIGEN ID ",idPersona);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "valor": valor,
      "numeroCuenta": numCuenta,
      "idPersona":idPersona

    });
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };
     console.log("TRYING TO DO + OPERATION TO"+ entidad);
     fetch(`http://localhost:8081/${entidad}/?operacion=sumar`, requestOptions)
    .then(response => response.text().then(function(text){localStorage.setItem("usuario",text)}))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    if(localStorage.getItem("bancoOrigen")=="jep"){
     
      fetch(`http://localhost:8081/transaccionJep/?operacion=restar`, requestOptions)
    .then(response => response.text().then(function(text){localStorage.setItem("usuario",text)}))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    }
    
    fetch(`http://localhost:8081/saveTransaccionsSystem?entidad=restar`, requestOptions)
    .then(response => response.text().then(function(text){localStorage.setItem("usuario",text)}))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
  console.log("json values " +localStorage.getItem("usuario"));
  }
  


}
