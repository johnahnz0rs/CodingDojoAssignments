import { Component, OnInit } from '@angular/core';

import { Player } from '../../player';
import { PlayerService } from '../../services/player.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['../../bootstrap.css', './game3.component.css']
})
export class Game3Component implements OnInit {
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

    this.gameNumber = '3';

    console.log('game number', this.gameNumber);
  }

  choosePlaying(player) {
    console.log(player);
    player.game3 = 'playing';

    this.playerService.updateOnePlayer(player).subscribe(() => {
      console.log('**** player was updated ****');
    });
  }

  chooseNotPlaying(player) {
    console.log(player);
    player.game3 = 'not playing';

    this.playerService.updateOnePlayer(player).subscribe(() => {
      console.log('**** player was updated ****');
    });
  }

  chooseUndecided(player) {
    console.log(player);
    player.game3 = 'undecided';

    this.playerService.updateOnePlayer(player).subscribe(response => {
      console.log('***** player updated *****', response);
    });
  }
}
