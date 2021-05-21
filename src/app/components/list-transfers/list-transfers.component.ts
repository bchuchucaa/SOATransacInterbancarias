import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-transfers',
  templateUrl: './list-transfers.component.html',
  styleUrls: ['./list-transfers.component.css']
})
export class ListTransfersComponent implements OnInit {
  active = 'top';
  constructor() { }

  ngOnInit(): void {
  }

}
