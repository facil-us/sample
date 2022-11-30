import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  getAll(cb: any)
  {
    this.http.get<Appointment>(`https://localhost:4200/appointment`).subscribe(cb);
  } 

  getOne(cb: any, id: any)
  {
    this.http.get<Appointment>(`https://localhost:4200/appointment/${id}`).subscribe(cb);
  }

  Add(cb: any, ap: Appointment)
  {
    this.http.post<Appointment>(`https://localhost:4200/appointment`, ap).subscribe(cb);
  }

  Delete(cb: any, id: any)
  {
    this.http.delete<Appointment>(`https://localhost:4200/appointment/${id}`).subscribe(cb);
  }

  Update(cb: any, ap: Appointment)
  {
    this.http.put<Appointment>(`https://localhost:4200/appointment`, ap).subscribe(cb);
  }

  constructor(private http:HttpClient) { }  
}
