import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/Http';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskNewComponent } from './task/task-new/task-new.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    TaskNewComponent
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
