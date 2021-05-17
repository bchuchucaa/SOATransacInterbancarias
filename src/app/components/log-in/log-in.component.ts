import { Component, OnInit } from '@angular/core';
import {TransaccionesService} from '../../services/transacciones.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  usuario:string="";
  password:string="";
  constructor(public services:TransaccionesService) { }

  ngOnInit(): void {
  }
  logIn(usuario:string,password:string){
    var persona=this.services.login(usuario,password);
    
    console.log(persona);
    alert(persona);
  }

}
