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
  getQuoteList(): Observable<Quote[]>{
    return this.httpClient.get<Quote[]>(`${this.apibaseUrl}/quotes/`);
  }
  
  //ADD QUOTE
  addQuote(quote: Quote): Observable<Object> {
    return this.httpClient.post<Quote>(`${this.apibaseUrl}/quote/`, quote);
  }
  
  // //UPDATE QUOTE
  // updateQuote(quoteId: number): Observable<Quote>{
  //   return this.httpClient.put<Quote>(`${this.apibaseUrl}/quote/${quoteId}/`, quote);
  // }

  //DELETE QUOTE
  deleteQuote(quoteId: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.apibaseUrl}/quote/${quoteId}/`);
  }


  //GET ONE QUOTE: 
}
