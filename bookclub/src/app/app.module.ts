import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PostComponent } from './post/post.component';
import { QuoteComponent } from './quote/quote.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import {AppRoutingModule } from './app-routing.module';
import { UpdateQuoteComponent } from './update-quote/update-quote.component';
import { EditPostComponent } from './edit-post/edit-post.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostComponent,
    QuoteComponent,
    LandingComponent,
    UpdateQuoteComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
