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
    getPostList(): Observable<Book[]>{
      return this.httpClient.get<Book[]>(`${this.apibaseUrl}/books/`);
    }
    
    //ADD Book
    addPost(Book: Book): Observable<Object> {
      return this.httpClient.post<Book>(`${this.apibaseUrl}/book/`, Book);
    }
    
    // //UPDATE Book
    updatePost(postId:number, Book: Book ): Observable<Object>{
      return this.httpClient.put<Book>(`${this.apibaseUrl}/book/${postId}/`, Book);
    }
  
    //DELETE Book
    deletePost(postId: number): Observable<void>{
      return this.httpClient.delete<void>(`${this.apibaseUrl}/book/${postId}/`);
    }
  
  
    //GET ONE Book: 
    getOnePost(postId: number): Observable<Book>{
      return this.httpClient.get<Book>(`${this.apibaseUrl}/book/${postId}/`);
    }
}
