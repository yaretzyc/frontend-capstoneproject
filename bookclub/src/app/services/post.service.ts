import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Post} from '../post';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apibaseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

    //GET ALL QUOTES
    getQuoteList(): Observable<Post[]>{
      return this.httpClient.get<Post[]>(`${this.apibaseUrl}/quotes/`);
    }
    
    //ADD Post
    addQuote(Post: Post): Observable<Object> {
      return this.httpClient.post<Post>(`${this.apibaseUrl}/Post/`, Post);
    }
    
    // //UPDATE Post
    updateQuote(postId:number, Post: Post ): Observable<Object>{
      return this.httpClient.put<Post>(`${this.apibaseUrl}/Post/${postId}/`, Post);
    }
  
    //DELETE Post
    deleteQuote(postId: number): Observable<void>{
      return this.httpClient.delete<void>(`${this.apibaseUrl}/Post/${postId}/`);
    }
  
  
    //GET ONE Post: 
    getOneQuote(postId: number): Observable<Post>{
      return this.httpClient.get<Post>(`${this.apibaseUrl}/Post/${postId}/`);
    }
}
