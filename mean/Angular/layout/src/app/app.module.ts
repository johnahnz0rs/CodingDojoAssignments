import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/Http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './gamma/gamma.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    GammaComponent
  ],
  imports: [
    BrowserModule,
      HttpModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
