import { Component, OnInit } from '@angular/core';

import { Player } from '../../player';
import { PlayerService } from '../../services/player.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['../../bootstrap.css', './game2.component.css']
})
export class Game2Component implements OnInit {

  players: Array<Player> = [];
  gameNumber: string;

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.playerService.getAllPlayers()
      .subscribe(returnedPlayers => {
        this.players = returnedPlayers;
      });

    this.gameNumber = '2';

    console.log('game number', this.gameNumber);

  }

  choosePlaying(player) {
    console.log(player);
    player.game2 = 'playing';

    this.playerService.updateOnePlayer(player).subscribe(() => {
      console.log('**** player was updated ****');
    });
  }

  chooseNotPlaying(player) {
    console.log(player);
    player.game2 = 'not playing';

    this.playerService.updateOnePlayer(player).subscribe(() => {
      console.log('**** player was updated ****');
    });
  }

  chooseUndecided(player) {
    console.log(player);
    player.game2 = 'undecided';

    this.playerService.updateOnePlayer(player).subscribe(response => {
      console.log('***** player updated *****', response);
    });
  }



}
