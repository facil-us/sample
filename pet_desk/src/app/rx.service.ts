import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rx } from './rx';

@Injectable({
  providedIn: 'root'
})
export class RxService {
  getAll(cb: any)
  {
    this.http.get<Rx>(`https://localhost:4200/rx`).subscribe(cb);
  } 

  getOne(cb: any, id: any)
  {
    this.http.get<Rx>(`https://localhost:4200/rx/${id}`).subscribe(cb);
  }

  Add(cb: any, rx: Rx)
  {
    this.http.post<Rx>(`https://localhost:4200/rx`, rx).subscribe(cb);
  }

  Delete(cb: any, id: any)
  {
    this.http.delete<Rx>(`https://localhost:4200/rx/${id}`).subscribe(cb);
  }

  Update(cb: any, rx: Rx)
  {
    this.http.put<Rx>(`https://localhost:4200/rx`, rx).subscribe(cb);
  }
  
  constructor(private http:HttpClient) { } 
}
