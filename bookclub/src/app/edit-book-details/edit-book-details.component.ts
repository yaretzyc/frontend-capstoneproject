import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../book';

@Component({
  selector: 'app-edit-book-details',
  templateUrl: './edit-book-details.component.html',
  styleUrls: ['./edit-book-details.component.css']
})
export class EditBookDetailsComponent implements OnInit {

  bookId: any;
  book: Book = new Book();



  constructor(private bookService: BookService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.bookId = this.route.snapshot.params['bookId'];
    this.bookService.getOneBook(this.bookId).subscribe(data =>{
      this.book = data;
      console.log(data);
    })

  }

  onSubmit(){
    this.bookService.updateBook(this.bookId, this.book).subscribe( data =>{
      this.router.navigate(['']);
    }
    ,error => console.log(error));
  }

}
