import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appt-detail',
  templateUrl: './appt-detail.component.html',
  styleUrls: ['./appt-detail.component.css']
})
export class ApptDetailComponent implements OnInit 
{
  newAppt: Appointment =
  {
  id: 0,
  pet_id: 0,
  appt_date: "",
  provider: "",
  appt_notes: ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
