import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Persona } from '../model/persona';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  conversion: any;
  countries: Persona[] = [];
  persona: any;

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }



  async login(usuario: string, password: string) {
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
    fetch("http://localhost:8081/loginCooperativa", requestOptions)
      .then(response => response.text().then(function(text){localStorage.setItem("usuario",text)}))
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
    console.log("json values " +localStorage.getItem("usuario"));
  }
  debitar(valor:string,numCuenta:string,idPersona:string){
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
    fetch("http://localhost:8081/transferenciaRestarJep", requestOptions)
    .then(response => response.text().then(function(text){localStorage.setItem("usuario",text)}))
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  console.log("json values " +localStorage.getItem("usuario"));
  }
  acreditar(){

  }


}
