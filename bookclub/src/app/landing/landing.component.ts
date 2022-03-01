import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  books: Array<Book> = [];
  book: Book = new Book();
  // title: any=this.books[-1].title;
  // title: string = "dklfjdlk"

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getBookList();
  }

  postList(bookId: number){
    // this.router.navigate(['book/:bookId/post', bookId]);
    // this.router.navigate([`book/${bookId}/posts`]);
    this.router.navigate(['book', bookId]);


  }
  quoteList(bookId: number){
    this.router.navigate([`book/${bookId}/quotes`]);


  }

  getBookList():void{
    this.bookService.getBookList().subscribe(
      (response: Book[]) =>{
        this.books = response;
        // console.log(this.books);
      }
    )
  }


  saveBook(){
    this.bookService.addBook(this.book).subscribe(
      data => {
        // console.log (data);
        this.getBookList();
      }
    )
  }

  onSubmit(){
    // console.log(this.book);
    this.saveBook();
    
  }



  updateBook(bookId: number){
    this.router.navigate(['edit-book', bookId]);
  }

  deleteBook(bookId: number){
    this.bookService.deleteBook(bookId).subscribe(data =>{
      this.getBookList();
    })
  }

}
