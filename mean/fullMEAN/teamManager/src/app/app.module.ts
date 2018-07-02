import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { PlayersNewComponent } from './players/players-new/players-new.component';
import { PlayersDetailComponent } from './players/players-detail/players-detail.component';

import { PlayerService } from './services/player.service';
import { Game1Component } from './status/game1/game1.component';
import { Game2Component } from './status/game2/game2.component';
import { Game3Component } from './status/game3/game3.component';

@NgModule({
  declarations: [AppComponent, PlayersListComponent, PlayersNewComponent, PlayersDetailComponent, Game1Component, Game2Component, Game3Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
