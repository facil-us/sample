import { Component, OnInit } from '@angular/core';
import { Rx } from '../rx';

@Component({
  selector: 'app-rx-detail',
  templateUrl: './rx-detail.component.html',
  styleUrls: ['./rx-detail.component.css']
})
export class RxDetailComponent implements OnInit 
{
   newRx: Rx =
   {
    id: 0,
    pet_id: 0,
    appt_id: 0,
    rx_name: "",
    rx_reminder: "",
    rx_notes: ""
   }

  constructor() { }

  ngOnInit(): void {
  }

}
