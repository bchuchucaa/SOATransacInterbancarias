import { Injectable } from '@angular/core';
import { Persona } from '../model/persona';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransaccionesService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


  constructor(private http:HttpClient) { }

login(usuario:string,password:string):Observable<any>{

return this.http.get<Persona[]>(`http://localhost:8080/Proveedor1-0.0.1/cooperativa/verificarUsuario?usuario=${usuario}+&password=${password}`);
}


}
