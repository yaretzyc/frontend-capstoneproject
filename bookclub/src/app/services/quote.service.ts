import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from '../quote';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private baseUrl= "http://localhost:8080/api/quotes/";

  constructor(private httpClient: HttpClient) { }

  getQuoteList(): Observable<Quote[]>{
    return this.httpClient.get<Quote[]>(`${this.baseUrl}`);
  }
}
