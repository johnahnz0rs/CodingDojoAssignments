import { Component, OnInit } from '@angular/core';
import { SumService} from '../sum.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
    alphaNumbers: number[] = [];
    constructor(private _sumService: SumService) { }

    ngOnInit() {
        this.alphaNumbers = this._sumService.retrieveAlphas();
        console.log('johnahnz0rs is l33t');
    }
    addRandomToAlpha() {
        this._sumService.alphaNums.push(Math.floor(Math.random() * 11));
    }
}
