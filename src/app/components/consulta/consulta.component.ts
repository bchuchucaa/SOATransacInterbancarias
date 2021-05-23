import { Component, OnInit } from '@angular/core';
import { TransaccionesService } from 'src/app/services/transacciones.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  active = 'top';
  idPersona: string = "";
  credenciales: any;
  cuentaObj: any;
  cuentaJson: string = ""
  nombre: string = "";
  apellido: string = "";
  numCuenta: string = "";
  saldo: string = "";
  constructor(private servicios: TransaccionesService) {
    this.credenciales = localStorage.getItem("usuario");
    var json = JSON.parse(this.credenciales);
    this.idPersona = json["0"].id;
    this.nombre = json["0"].nombre;
    this.apellido = json["0"].apellido;
    this.getCuenta();

  }

  ngOnInit(): void {
  }
  async getCuenta() {
     this.servicios.recuperarCuentaUsuario(this.idPersona);
    this.cuentaObj = localStorage.getItem("cuentaUsuario");
    var cuentajson = JSON.parse(this.cuentaObj);
    this.numCuenta = cuentajson["0"].numero_cuenta;
    this.saldo = cuentajson["0"].saldo;
  }

}
