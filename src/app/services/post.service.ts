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

    getAllPosts(): Observable<Post[]>{
      return this.httpClient.get<Post[]>(`${this.apibaseUrl}/posts/`);
    }

    //GET ALL Posts
    getPostList(bookId: number): Observable<Post[]>{
      return this.httpClient.get<Post[]>(`${this.apibaseUrl}/book/${bookId}/posts/`);
    }
    
    //create Post
    // addPost(Post: Post): Observable<Object> {
    //   return this.httpClient.post<Post>(`${this.apibaseUrl}/post/`, Post);
    // }
    addPost(Post: Post, bookId: number): Observable<Object> {
      return this.httpClient.post<Post>(`${this.apibaseUrl}/book/${bookId}/post/`, Post);
    }
    
    // //UPDATE Post
    // updatePost(postId:number, Post: Post ): Observable<Object>{
    //   return this.httpClient.put<Post>(`${this.apibaseUrl}/post/${postId}/`, Post);
    // }
    updatePost(postId:number, bookId: number, Post: Post ): Observable<Object>{
      return this.httpClient.put<Post>(`${this.apibaseUrl}/book/${bookId}/post/${postId}/`, Post);
    }

    //DELETE Post
    // deletePost(postId: number): Observable<void>{
    //   return this.httpClient.delete<void>(`${this.apibaseUrl}/post/${postId}/`);
    // }
  
    deletePost(postId: number, bookId: number): Observable<void>{
      return this.httpClient.delete<void>(`${this.apibaseUrl}/book/${bookId}/post/${postId}/`);
    }
  
  
    //GET ONE Post: 
    // getOnePost(postId: number): Observable<Post>{
    //   return this.httpClient.get<Post>(`${this.apibaseUrl}/post/${postId}/`);
    // }

    getOnePost(postId: number, bookId: number): Observable<Post>{
      return this.httpClient.get<Post>(`${this.apibaseUrl}/book/${bookId}/post/${postId}/`);
    }
}
