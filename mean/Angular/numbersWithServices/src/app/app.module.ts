import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { GammaComponent } from './gamma/gamma.component';

import { SumService } from './sum.service';

@NgModule({
    declarations: [
        AppComponent,
        AlphaComponent,
        BetaComponent,
        GammaComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [SumService],
    bootstrap: [AppComponent]
})
export class AppModule { }
