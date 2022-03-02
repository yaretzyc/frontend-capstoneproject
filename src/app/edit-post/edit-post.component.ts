import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  postId= this.route.snapshot.params['postId'];
  bookId=  this.route.snapshot.params['bookId'];
  post: Post = new Post();

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.postId = this.route.snapshot.params['postId'];
    // this.bookId = this.route.snapshot.params['bookId'];

    this.postService.getOnePost(this.postId, this.bookId).subscribe(data =>{
      console.log("wejroiweuroiwerfj");
      this.post = data;
      console.log("kladsjcncvnfnv");
      // console.log(data);
    })
    // getOnePost(postId: number, bookId: number): Observable<Post>{
    //   return this.httpClient.get<Post>(`${this.apibaseUrl}/book/${bookId}/post/${postId}/`);
    // }

  }

  onSubmit(){
    this.postService.updatePost(this.postId,this.bookId, this.post).subscribe( data =>{
      // this.router.navigate(['/post']);
      this.router.navigate(['book', this.bookId]);
    }
    ,error => console.log(error));
  }

}
