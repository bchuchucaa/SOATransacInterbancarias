import { Component, OnInit } from '@angular/core';
import { TransaccionesService } from 'src/app/services/transacciones.service';

@Component({
  selector: 'app-list-transfers',
  templateUrl: './list-transfers.component.html',
  styleUrls: ['./list-transfers.component.css']
})
export class ListTransfersComponent implements OnInit {
  active = 'top';
  data:any;
  transfers:any[];
  constructor(private services:TransaccionesService) { 
    services.getAllTransacctions();
    this.data=localStorage.getItem("userTransfers");
    let dataJSON=JSON.parse(this.data);
    var res = [];
    for(var i in dataJSON){
      res.push(dataJSON[i]);
    }
    this.transfers=res;

  }

  ngOnInit(): void {
  }

}
