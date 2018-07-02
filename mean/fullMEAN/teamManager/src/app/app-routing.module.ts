import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersDetailComponent } from './players/players-detail/players-detail.component';
import { PlayersListComponent } from './players/players-list/players-list.component';
import { PlayersNewComponent } from './players/players-new/players-new.component';
import { Game1Component } from './status/game1/game1.component';
import { Game2Component } from './status/game2/game2.component';
import { Game3Component } from './status/game3/game3.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'players/list',
    pathMatch: 'full'
  },
  {
    path: 'players',
    redirectTo: 'players/list',
    pathMatch: 'full'
  },
  {
    path: 'players/list',
    pathMatch: 'full',
    component: PlayersListComponent
  },
  {
    path: 'players/addplayer',
    pathMatch: 'full',
    component: PlayersNewComponent
  },
  {
    path: 'players/:id',
    pathMatch: 'full',
    component: PlayersDetailComponent
  },
  {
    path: 'status',
    redirectTo: 'status/games/1',
    pathMatch: 'full'
  },
  {
    path: 'status/games/',
    pathMatch: 'full',
    redirectTo: 'status/games/1'
  },
  {
    path: 'status/games/1',
    pathMatch: 'full',
    component: Game1Component
  },
  {
    path: 'status/games/2',
    pathMatch: 'full',
    component: Game2Component
  },
  {
    path: 'status/games/3',
    pathMatch: 'full',
    component: Game3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
