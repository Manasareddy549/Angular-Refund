import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MovieServiceService} from './movie-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { BookMovieComponent } from './bookmovie/bookmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    BookMovieComponent,
    
    CancelTicketComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpClientModule,MovieServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
