import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../post';
import { Book } from '../book';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  post: Array<Post>=[]; //post generates all the posts for that one book id
  posts: Post = new Post(); //onsubmit creates new post
  // bookId: number= 4;
  bookId: number= this.route.snapshot.params['bookId'] ;

  // private apibaseUrl = environment.baseUrl;

  constructor(private postService: PostService, private router:Router, private route: ActivatedRoute,
    private http: HttpClient ) { }


  ngOnInit(): void {
    this.getPostList();
    // this.getList(this.)
    // this.bookId = this.route.snapshot.params['bookId']
    

    // this.route.paramMap
    // .subscribe(p => {
    //   this.bookId = Book.find(b => {  
    //     return b.id === parseInt(p.get('id') || '', 10) //|| city.name === (p.get('name') || '') ;       
    //   });
    // });
  
  }


  // getList(){
  //   this.http
  //   .get(`${this.apibaseUrl}/book/${bookId}/posts/`)
  //   .subscribe((resp) => {
  //     this.book = resp;
  //   })
  // }

  getPostList():void{
    this.postService.getPostList(this.bookId).subscribe(
      (response: Post[]) =>{
        this.post = response;
        // console.log(this.posts);
      }
    )
  }


  // savePost(){
  //   this.postService.addPost(this.posts, this.bookId).subscribe(
  //     data => {
  //       // console.log (data);
  //       this.getPostList();
  //     })
  // }

  onSubmit(){
    // console.log(this.posts);
    // this.savePost();
    this.postService.addPost(this.posts, this.bookId).subscribe(
      data => {
        // console.log (data);
        this.getPostList();
      })
  }

  // private getQuotes(){
  //   this.postService.getQuoteList().subscribe(data => {
  //     this.posts = data;
  //   } )
  // }

  updatePost(postId: number){
    // console.log("routing to update component")
    // this.router.navigate([`book/${this.bookId}/update-post`, postId]);
    this.router.navigate([`book/${this.bookId}/update-post/`, postId]);


  }

  deletePost(postId: number){
    this.postService.deletePost(postId, this.bookId).subscribe(data =>{
      this.getPostList();
    })
  }

}
