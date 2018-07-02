import { Component, OnInit } from '@angular/core';
import { SumService} from '../sum.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
    betaNumbers: number[] = [];
    constructor(private _sumService: SumService) { }

    ngOnInit() {
        this.betaNumbers = this._sumService.retrieveBetas();
    }
    addRandomToBeta() {
        this._sumService.betaNums.push(Math.floor(Math.random() * 11));
    }
}
