import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyNewCompComponent } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewCompComponent,
    Comp2Component,
      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
