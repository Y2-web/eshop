import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const bookURL = "http://localhost:9000"

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //getBooks(): Array<Book>{
   //return [new Book(1, "Tintin au Tibet"), new Book(2, "Asterix et obelix"), new Book(3, "DragonBallZ")];
  //}
  constructor(private http: HttpClient) { }

  getBooksS(): Observable<Book[]>
  { console.log("ggg");
    return this.http.get<Book[]>(bookURL + "/books")} 

  deleteBookS(id: number): Observable<any> {return this.http.delete(bookURL + "/delete/" + id)}

  addBookS(book: Book): Observable<any>{return this.http.post(bookURL + "/add",book)}

}


/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';



const dogsURL = 'http://localhost:8080'



@Injectable()
export class DogService {



 constructor(private http: HttpClient) {
  }



 getDogsList(): Observable<Dog[]> {
    return this.http.get<Dog[]>(dogsURL+"/dogs");
  }



 get(id: any): Observable<Dog> {
    return this.http.get<Dog>(`${dogsURL}/dogs/${id}`);
  }



  save(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(dogsURL+"/adddog", dog);
  }



 update(id: any, data: any): Observable<any> {
    return this.http.put(`${dogsURL}/dogs/${id}`, data);
  }



 delete(id: any): Observable<any> {
    return this.http.delete(`${dogsURL}/dogs/${id}`);
  }



 deleteAll(): Observable<any> {
    return this.http.delete(dogsURL+"/dogs");
  }*/

