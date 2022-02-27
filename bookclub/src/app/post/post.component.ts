import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Array<Post>=[];
  posts: Post = new Post();

  constructor(private postService: PostService, private router:Router ) { }


  ngOnInit(): void {
    this.getPostList();
  }

  getPostList():void{
    this.postService.getPostList().subscribe(
      (response: Post[]) =>{
        this.post = response;
        console.log(this.posts);
      }
    )
  }


  savePost(){
    this.postService.addPost(this.posts).subscribe(
      data => {
        console.log (data);
        console.log("lkdfjlkdjf")
      }
    )
  }

  onSubmit(){
    console.log(this.posts);
    this.savePost();
    
  }

  // private getQuotes(){
  //   this.postService.getQuoteList().subscribe(data => {
  //     this.posts = data;
  //   } )
  // }

  updatePost(postId: number){
    console.log("routing to update component")
    this.router.navigate(['update-post', postId]);

  }

  deletePost(postId: number){
    this.postService.deletePost(postId).subscribe(data =>{
      this.getPostList();
    })
  }

}
