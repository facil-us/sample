import { formatDate } from '@angular/common';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Visit } from '../visit';

@Component({
  selector: 'app-vist-detail',
  templateUrl: './vist-detail.component.html',
  styleUrls: ['./vist-detail.component.css']
})
export class VistDetailComponent implements OnInit {

  newVisit: Visit =
  {
    pet_id: 0,
    pet_name: "",
    species: "",
    dob: "",
    pet_notes:"",
    appt_date: "",
    provider: "",
    appt_notes: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
