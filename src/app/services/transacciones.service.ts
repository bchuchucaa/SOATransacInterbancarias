import { Injectable } from '@angular/core';
import { Persona } from '../model/persona';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {

  constructor(private http:HttpClient) { }

login(usuario:string,password:string):Observable<any>{
  let heads = new HttpHeaders();
  heads.append('Content-Type', 'application/json');
  const params = new HttpParams().set("usuario", usuario).set("password", password); //Create new HttpParams
  console.log(params);
  const url = 'http://localhost:8080/Proveedor1-0.0.1/cooperativa/verificarUsuario';
return this.http.get<any>(url,{headers:heads ,params: params});
}


}
