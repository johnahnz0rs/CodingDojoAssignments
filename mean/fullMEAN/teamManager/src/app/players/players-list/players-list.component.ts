import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['../../bootstrap.css', './players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players: Array<any> = [];


  constructor(
    private playerService: PlayerService,
    private router: Router
  ) { }

  ngOnInit() {

    this.players = [];


    this.playerService.getAllPlayers()
      .subscribe(returnedPlayers => {
        this.players = returnedPlayers;

        if (returnedPlayers.length > 0) {
          return;
        } else {
          this.ifEmptyDB();
        }
      });

  }

  ifEmptyDB() {
    if (this.players.length > 0) {
      return;
    } else {
      const mongo = JSON.stringify([
        { name: 'johnahnz0rs', position: 'Campin\' Pimp!', game1: 'playing', game2: 'playing', game3: 'playing' },
        { name: 'Keanu Reeves', position: 'JAhn\'s bff', game1: 'playing', game2: 'playing', game3: 'playing' },
        { name: 'Benny F. Baby', position: 'Please say the \'Baby\'', game1: 'playing', game2: 'playing', game3: 'playing' },
        { name: 'Ke$ha', position: 'JAhn\'s bottom girl', game1: 'playing', game2: 'playing', game3: 'playing' },
        { name: 'Dale Carnegie', position: 'JAhn\'s conscience', game1: 'playing', game2: 'playing', game3: 'playing' }
      ]);
      this.playerService.loadInitialData(mongo)
        .subscribe(() => {
          this.router.navigateByUrl('/');
        });
    }
  }

  deletePlayer(id) {
    console.log('***** user clicked delete player button *****');
    console.log('user id', id);
    this.playerService.deletePlayer(id)
      .subscribe(() => {
        console.log('***** deleted player with id', id, '*****');
        this.players = this.players.filter(player => id !== player._id);
      });

    // console.log('***** re-get players list *****');
    // this.playerService.getAllPlayers()
    //   .subscribe(returnedPlayers => {
    //     this.players = returnedPlayers;
    //   });

    // console.log('***** reloading page *****');
    // this.router.navigateByUrl('/status')
    //   .then(() => {
    //     this.router.navigateByUrl('/players');
    //   });

  }

}

