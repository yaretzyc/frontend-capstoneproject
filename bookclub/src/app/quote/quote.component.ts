import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Array<Quote>=[];
  // public quotes: Quote[];

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes():void{
    this.quoteService.getQuoteList().subscribe(
      (response: Quote[]) =>{
        this.quotes = response;
        console.log(this.quotes);
      }
    )
  }
  // private getQuotes(){
  //   this.quoteService.getQuoteList().subscribe(data => {
  //     this.quotes = data;
  //   } )
  // }

}
