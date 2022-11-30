import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root'
})
export class PetService 
{
  getAll(cb: any)
  {
    this.http.get<Pet>(`https://localhost:4200/pet`).subscribe(cb);
  } 

  getOne(cb: any, id: any)
  {
    this.http.get<Pet>(`https://localhost:4200/pet/${id}`).subscribe(cb);
  }

  Add(cb: any, pt: Pet)
  {
    this.http.post<Pet>(`https://localhost:4200/pet`, pt).subscribe(cb);
  }

  Delete(cb: any, id: any)
  {
    this.http.delete<Pet>(`https://localhost:4200/pet/${id}`).subscribe(cb);
  }

  Update(cb: any, pt: Pet)
  {
    this.http.put<Pet>(`https://localhost:4200/pet`, pt).subscribe(cb);
  }

  constructor(private http:HttpClient) { }  
}
