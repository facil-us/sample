import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  newUser: User = 
  {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    user_name: "",
    isAdmin: 0

  }
  constructor() { }

  ngOnInit(): void {
  }

}
