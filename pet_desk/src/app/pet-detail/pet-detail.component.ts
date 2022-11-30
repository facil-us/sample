import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit 
{
  newPet: Pet =
  {
    id: 0,
    user_id: 0,
    pet_name: "",
    species: "",
    breed: "",
    dob: "",
    pet_notes:"",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
