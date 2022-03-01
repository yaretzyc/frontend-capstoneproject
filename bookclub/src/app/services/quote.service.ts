import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../quote';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  // private baseUrl= "http://localhost:8080/api/quotes/";
  private apibaseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }


  //GET ALL QUOTES
  allQuotes(): Observable<Quote[]>{
    return this.httpClient.get<Quote[]>(`${this.apibaseUrl}/quotes/`);
  }
  //GETALL QUOTES FROM BOOK
  getQuoteList(bookId: number): Observable<Quote[]>{
    return this.httpClient.get<Quote[]>(`${this.apibaseUrl}/book/${bookId}/quotes`)
  }
  
  //ADD QUOTE
  // addQuote(quote: Quote): Observable<Object> {
  //   return this.httpClient.post<Quote>(`${this.apibaseUrl}/quote/`, quote);
  // }
  addQuote(bookId: number, Quote: Quote): Observable<Object>{
    return this.httpClient.post<Quote>(`${this.apibaseUrl}/book/${bookId}/quote/`, Quote);
  }
  


  // //UPDATE QUOTE
  // updateQuote(quoteId:number, quote: Quote ): Observable<Object>{
  //   return this.httpClient.put<Quote>(`${this.apibaseUrl}/quote/${quoteId}/`, quote);
  // }

  updateQuote(bookId: number, quoteId: number, Quote: Quote): Observable<Object>{
    return this.httpClient.put<Quote>(`${this.apibaseUrl}/book/${bookId}/quote/${quoteId}/`, Quote);
  }

  //DELETE QUOTE
  // deleteQuote(quoteId: number): Observable<void>{
  //   return this.httpClient.delete<void>(`${this.apibaseUrl}/quote/${quoteId}/`);
  // }
  deleteQuote(bookId: number, quoteId: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.apibaseUrl}/book/${bookId}/quote/${quoteId}/`);
  }

  //GET ONE QUOTE: 
  // getOneQuote(quoteId: number): Observable<Quote>{
  //   return this.httpClient.get<Quote>(`${this.apibaseUrl}/quote/${quoteId}/`);
  // }

  getOneQuote(bookId: number, quoteId: number): Observable<Quote>{
    return this.httpClient.get<Quote>(`${this.apibaseUrl}/book/${bookId}/quote/${quoteId}/`);
  }
 
}
