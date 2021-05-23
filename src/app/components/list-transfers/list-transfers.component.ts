import { Component, OnInit } from '@angular/core';
import { Transfer } from 'src/app/model/transfer';
import { TransaccionesService } from 'src/app/services/transacciones.service';

@Component({
  selector: 'app-list-transfers',
  templateUrl: './list-transfers.component.html',
  styleUrls: ['./list-transfers.component.css']
})
export class ListTransfersComponent implements OnInit {
  active = 'top';
  data:any;
  transfers:Array<Transfer>=new Array<Transfer>();
  constructor(private services:TransaccionesService) { 
    services.getAllTransacctions();
    this.data=localStorage.getItem("userTransfers");
    let dataJSON=JSON.parse(this.data);
    var res = [];
    let tmpTransfer:Transfer;
    for(var i in dataJSON){
      tmpTransfer= new Transfer();
      tmpTransfer.id=dataJSON[i].id;
      tmpTransfer.monto=dataJSON[i].monto;
      tmpTransfer.numCuentaDestino=dataJSON[i].numero_cuenta_destino;
      tmpTransfer.numCuentaOrigen=dataJSON[i].numero_cuenta_origen;
      tmpTransfer.tipoTransaccion=dataJSON[i].tipo_transaccion;
      tmpTransfer.personaDestino=dataJSON[i].persona_nombre_destino;
      this.transfers.push(tmpTransfer);
    }
    console.log("Transferencias ",this.transfers);

  }

  ngOnInit(): void {
  }

}
