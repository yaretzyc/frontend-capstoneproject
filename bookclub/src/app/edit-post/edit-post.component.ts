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

  postId: any;
  post: Post = new Post();

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.postId = this.route.snapshot.params['postId'];
    this.postService.getOnePost(this.postId).subscribe(data =>{
      this.post = data;
      // console.log(data);
    })

  }

  onSubmit(){
    this.postService.updatePost(this.postId, this.post).subscribe( data =>{
      this.router.navigate(['/post']);
    }
    ,error => console.log(error));
  }

}
