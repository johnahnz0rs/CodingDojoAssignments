///<reference path="user.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ScoreComponent } from './score/score.component';


@NgModule({
    declarations: [
        AppComponent,
        FormComponent,
        ScoreComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
