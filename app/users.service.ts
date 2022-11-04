import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';





const URL = "http://localhost:9000"

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{return this.http.get<User[]>(URL + "/users")}

  deleteUser(id: number): Observable<any> {return this.http.delete(URL + "/deleteUser/" + id)}

  addUser(user: User): Observable<any> {return this.http.post(URL + "/addUser",user )}
}
