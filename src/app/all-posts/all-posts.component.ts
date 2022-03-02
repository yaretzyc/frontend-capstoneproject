import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  post: any;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPostList();
  }

  getPostList():void{
    this.postService.getAllPosts().subscribe(
      (response: Post[]) =>{
        this.post = response;
        // console.log(this.posts);
      }
    )
  }
}
