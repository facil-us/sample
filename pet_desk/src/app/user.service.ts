import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   getAll(cb: any)
    {
      this.http.get<User>(`https://localhost:4200/user`).subscribe(cb);
    } 
    
    getOne(cb: any, id: any)
    {
      this.http.get<User>(`https://localhost:4200/user/${id}`).subscribe(cb);
    }
  
    Add(cb: any, ur: User)
    {
      this.http.post<User>(`https://localhost:4200/user`, ur).subscribe(cb);
    }
  
    Delete(cb: any, id: any)
    {
      this.http.delete<User>(`https://localhost:4200/user/${id}`).subscribe(cb);
    }
  
    Update(cb: any, ur: User)
    {
      this.http.put<User>(`https://localhost:4200/user`, ur).subscribe(cb);
    }
  
    constructor(private http:HttpClient) { }  
  }