import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service'
import { Quote } from '../quote';

@Component({
  selector: 'app-all-quotes',
  templateUrl: './all-quotes.component.html',
  styleUrls: ['./all-quotes.component.css']
})
export class AllQuotesComponent implements OnInit {

  quote : any;
  constructor(private quoteService: QuoteService) { }


  ngOnInit(): void {
    this.getQuotesList();
  }
 

  getQuotesList():void{
    this.quoteService.allQuotes().subscribe(
      (response: Quote[]) =>{
        this.quote = response;
      }
    )
  }
}