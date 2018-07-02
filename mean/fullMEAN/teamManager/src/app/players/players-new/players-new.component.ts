import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Player } from '../../player';
import { PlayerService } from '../../services/player.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-players-new',
  templateUrl: './players-new.component.html',
  styleUrls: ['../../bootstrap.css', './players-new.component.css']
})
export class PlayersNewComponent implements OnInit {

  newPlayer: Player = new Player();

  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newPlayer.game1 = 'undecided';
    this.newPlayer.game2 = 'undecided';
    this.newPlayer.game3 = 'undecided';
  }

  addOnePlayer() {
    console.log('***** sending this data to be added *****');
    console.log(this.newPlayer);

    this.playerService.addOnePlayer(this.newPlayer)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }


}
