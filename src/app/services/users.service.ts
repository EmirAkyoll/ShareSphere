import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getUser(username: string): Observable<User[]>{
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users?username=${username}`)
  }

  // createUser(user_data: User){
  //   return this.http.post<User>(`https://jsonplaceholder.typicode.com/users`, user_data)
  // }
}
