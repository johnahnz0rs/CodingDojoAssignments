import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp0Component } from './comp0/comp0.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    Comp0Component,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
