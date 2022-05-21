import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GifDetailsComponent } from './components/gif-details/gif-details.component';
import { HttpClientModule } from '@angular/common/http';
import { GifsComponent } from './components/gifs/gifs.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LandingComponent } from './components/landing/landing.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    GifDetailsComponent,
    GifsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
