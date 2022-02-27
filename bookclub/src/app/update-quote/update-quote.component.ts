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

  quoteId: any;
  quotes: Quote = new Quote();


  constructor(private quoteService: QuoteService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.quoteId = this.route.snapshot.params['quoteId'];
    // console.log("kldjfkljdfkljsdfkljkdsjfkldjsflkj")
    this.quoteService.getOneQuote(this.quoteId).subscribe(data =>{
      // console.log("sam")
      this.quotes = data;
      console.log(data);
      // console.log("kdjfkd")
      
    })

    

  }

  onSubmit(){
    this.quoteService.updateQuote(this.quoteId, this.quotes).subscribe( data =>{
      // console.log("here")
      // console.log(data)
      // this.quoteList();
      // console.log("here3")
      this.router.navigate(['/quotes']);

    }
    ,error => console.log(error));
    console.log("here4")
  }


    quoteList(){
      console.log("here5");
      this.router.navigate(['/quotes']);
      console.log("here6");

    }



}
