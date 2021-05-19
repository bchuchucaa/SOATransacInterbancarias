import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/model/persona';
import {TransaccionesService} from '../../services/transacciones.service';
import { HttpClient, HttpHeaders,HttpClientJsonpModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  usuario:string="";
  password:string="";


  constructor(public services:TransaccionesService,public http:HttpClient,private router:Router) { 
    
  }

  ngOnInit(): void {
    
  }
  logIn(usuario:string,password:string){
    this.services.login(usuario,password);
    if(localStorage.getItem("usuario")!=null){
      this.router.navigate(["../inicio"]);
    }else{
      console.log("Credenciales incorrectas");
    }
    
  
   
    
    
  }
   
    
  
  

}
