import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Visit } from './visit';

@Injectable({
  providedIn: 'root'
})
export class VisitService 
{

  getAll(cb: any)
  {
    this.http.get<Visit[]>(`https://localhost:4200/visit`).subscribe(cb);
  } 

  getOne(cb: any, id: any)
  {
    this.http.get<Visit[]>(`https://localhost:4200/visit/pet/${id}`).subscribe(cb);
  }

  constructor(private http: HttpClient) { }
}
