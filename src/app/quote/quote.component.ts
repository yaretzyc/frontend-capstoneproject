import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quote } from '../quote';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: Array<Quote>=[];
  quotes: Quote = new Quote();
  // quotes: Quote[];
  bookId: number = this.route.snapshot.params['bookId']

  constructor(private quoteService: QuoteService, private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {
    // this.getQuotes();
    this.getQuotesList();
  }
  // getQuoteList(){
  //   this.quoteService.getQuoteList().subscribe(data => {
  //     this.quote = data;
  //   })
  // }

  getQuotesList():void{
    this.quoteService.getQuoteList(this.bookId).subscribe(
      (response: Quote[]) =>{
        this.quote = response;
        // console.log(this.quotes);
      }
    )
  }

  // saveQuote(){
  //   this.quoteService.addQuote(this.bookId, this.quotes).subscribe(
  //     data => {
  //       // console.log (data);
  //       // console.log("lkdfjlkdjf")
  //       this.getQuotesList();
  //     }
  //   )
  // }

  onSubmit(){
    // console.log(this.quotes);
    // console.log("k")
    // this.saveQuote();
    // window.location.reload();
    this.quoteService.addQuote(this.bookId, this.quotes).subscribe(
      data => {
        // console.log (data);
        // console.log("lkdfjlkdjf")
        this.getQuotesList();
    
  })
}

  // private getQuotes(){
  //   this.quoteService.getQuoteList().subscribe(data => {
  //     this.quotes = data;
  //   } )
  // }

  updateQuote(quoteId: number){
    // console.log("routing to update component")
    // this.router.navigate(['update-quote', id]);
    this.router.navigate([`book/${this.bookId}/update-quote/`, quoteId]);
  }

  deleteQuote(quoteId: number){
    this.quoteService.deleteQuote(this.bookId, quoteId).subscribe(data =>{
      this.getQuotesList();

    })
  }
  

}
