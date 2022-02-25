import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // private baseURL = "http://localhost:8080/api/book/books/"

  constructor(private httpClient: HttpClient) { }

  // getBookList(): Observable<Book[]>{
  //   return this.httpClient.get<Book[]>(`${this.baseURL}`);
  // }
}
