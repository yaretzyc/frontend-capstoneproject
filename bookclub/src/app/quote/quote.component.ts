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

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.getQuotes();
  }

  private getQuotes(){
    this.quoteService.getQuoteList().subscribe(data => {
      this.quotes = data;
    } )
    
  }

}
