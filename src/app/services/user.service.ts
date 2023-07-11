import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'https://api.escuelajs.co/api/v1/users'

  constructor(
    private http: HttpClient
  ) {}


  getUser(id: number){
    return this.http.get<User>(`${this.apiUrl}/${id}`);
  }


  updateUser(id: number, dto:User){
    return this.http.put<User>(`${this.apiUrl}/${id}`, dto);
  }
}
