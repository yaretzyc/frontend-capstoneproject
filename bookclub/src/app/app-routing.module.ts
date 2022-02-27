import { NgModule } from "@angular/core";

import {RouterModule, Routes} from '@angular/router'
import { LandingComponent } from "./landing/landing.component";
import { PostComponent } from "./post/post.component";
import { QuoteComponent } from "./quote/quote.component";
import { UpdateQuoteComponent } from "./update-quote/update-quote.component";

const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    
    {
        path: 'quotes',
        component: QuoteComponent
    },

    {
        path: 'post',
        component: PostComponent
    },
    {
        path:'update-quote/:quoteId',
        component: UpdateQuoteComponent
    }

]


@NgModule({
    imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  