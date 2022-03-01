import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Book } from '../book';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // private baseURL = "http://localhost:8080/api/book/books/"
  private apibaseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  // getBookList(): Observable<Book[]>{
  //   return this.httpClient.get<Book[]>(`${this.baseURL}`);
  // }

  
    //GET ALL Books
    getBookList(): Observable<Book[]>{
      return this.httpClient.get<Book[]>(`${this.apibaseUrl}/books/`);
    }
    
    //ADD Book
    addBook(Book: Book): Observable<Object> {
      return this.httpClient.post<Book>(`${this.apibaseUrl}/book/`, Book);
    }
    
    // //UPDATE Book
    updateBook(bookId:number, Book: Book ): Observable<Object>{
      return this.httpClient.put<Book>(`${this.apibaseUrl}/book/${bookId}/`, Book);
    }
  
    //DELETE Book
    deleteBook(bookId: number): Observable<void>{
      return this.httpClient.delete<void>(`${this.apibaseUrl}/book/${bookId}/`);
    }
  
  
    //GET ONE Book: 
    getOneBook(bookId: number): Observable<Book>{
      return this.httpClient.get<Book>(`${this.apibaseUrl}/book/${bookId}/`);
    }
}
