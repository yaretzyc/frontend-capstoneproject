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

    //GET ALL Posts
    getPostList(): Observable<Post[]>{
      return this.httpClient.get<Post[]>(`${this.apibaseUrl}/posts/`);
    }
    
    //ADD Post
    addPost(Post: Post): Observable<Object> {
      return this.httpClient.post<Post>(`${this.apibaseUrl}/post/`, Post);
    }
    
    // //UPDATE Post
    updatePost(postId:number, Post: Post ): Observable<Object>{
      return this.httpClient.put<Post>(`${this.apibaseUrl}/post/${postId}/`, Post);
    }
  
    //DELETE Post
    deletePost(postId: number): Observable<void>{
      return this.httpClient.delete<void>(`${this.apibaseUrl}/post/${postId}/`);
    }
  
  
    //GET ONE Post: 
    getOnePost(postId: number): Observable<Post>{
      return this.httpClient.get<Post>(`${this.apibaseUrl}/post/${postId}/`);
    }
}
