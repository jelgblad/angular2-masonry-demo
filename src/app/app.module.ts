import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdCardModule } from '@angular2-material/card';
import { MasonryModule } from 'angular2-masonry'; // Import MasonryModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule,
    MasonryModule // Add MasonryModule to AppModule imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
