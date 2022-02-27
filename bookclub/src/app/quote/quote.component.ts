import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private quoteService: QuoteService, private router: Router) { 

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
    this.quoteService.getQuoteList().subscribe(
      (response: Quote[]) =>{
        this.quote = response;
        console.log(this.quotes);
      }
    )
  }

  saveQuote(){
    this.quoteService.addQuote(this.quotes).subscribe(
      data => {
        console.log (data);
        console.log("lkdfjlkdjf")
      }
    )
  }

  onSubmit(){
    console.log(this.quotes);
    console.log("k")
    this.saveQuote();
    // window.location.reload();

    
  }

  // private getQuotes(){
  //   this.quoteService.getQuoteList().subscribe(data => {
  //     this.quotes = data;
  //   } )
  // }

  updateQuote(id: number){
    console.log("routing to update component")
    this.router.navigate(['update-quote', id]);

  }

  deleteQuote(qouteId: number){
    this.quoteService.deleteQuote(qouteId).subscribe(data =>{
      this.getQuotesList();

    })
  }
  

}
