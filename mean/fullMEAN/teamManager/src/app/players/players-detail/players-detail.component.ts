import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Player } from '../../player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-players-detail',
  templateUrl: './players-detail.component.html',
  styleUrls: ['../../bootstrap.css', './players-detail.component.css']
})
export class PlayersDetailComponent implements OnInit {

  player: Player = new Player();


  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('**** this is the url param id', id, '*****');

    this.playerService.getOnePlayer(id)
      .subscribe(returnedPlayer => {
        console.log('***** detail component received this player *****');
        console.log(returnedPlayer);
        this.player = returnedPlayer;
      });
  }

}
