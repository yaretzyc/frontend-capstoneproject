import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quote } from '../quote';
import { QuoteService } from '../services/quote.service';
// import { of } from 'rxjs';


@Component({
  selector: 'app-update-quote',
  templateUrl: './update-quote.component.html',
  styleUrls: ['./update-quote.component.css']
})
export class UpdateQuoteComponent implements OnInit {

  quoteId = this.route.snapshot.params['quoteId'];
  bookId = this.route.snapshot.params['bookId'];
  quotes: Quote = new Quote();


  constructor(private quoteService: QuoteService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
    this.quoteService.getOneQuote(this.bookId, this.quoteId).subscribe(data =>{
      this.quotes = data;
      console.log(data);
    })
  }

  onSubmit(){
    this.quoteService.updateQuote(this.bookId, this.quoteId, this.quotes).subscribe( data =>{
      this.router.navigate([`book/${this.bookId}/quotes`]);
    }
    ,error => console.log(error));
  }

  quoteList(){
      this.router.navigate(['/quotes']);

    }



}
