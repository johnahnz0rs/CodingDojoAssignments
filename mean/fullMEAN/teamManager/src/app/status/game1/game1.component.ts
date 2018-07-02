import { Component, OnInit } from '@angular/core';

import { Player } from '../../player';
import { PlayerService } from '../../services/player.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['../../bootstrap.css', './game1.component.css']
})
export class Game1Component implements OnInit {
  players: Array<Player> = [];
  gameNumber: string;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(returnedPlayers => {
      this.players = returnedPlayers;
    });

    this.gameNumber = '1';

    console.log('game number', this.gameNumber);
  }

  choosePlaying(player) {
    console.log(player);
    player.game1 = 'playing';

    this.playerService.updateOnePlayer(player).subscribe(() => {
      console.log('**** player was updated ****');
    });
  }

  chooseNotPlaying(player) {
    console.log(player);
    player.game1 = 'not playing';

    this.playerService.updateOnePlayer(player).subscribe(() => {
      console.log('**** player was updated ****');
    });
  }

  chooseUndecided(player) {
    console.log(player);
    player.game1 = 'undecided';

    this.playerService.updateOnePlayer(player).subscribe(response => {
      console.log('***** player updated *****', response);
    });
  }
}
