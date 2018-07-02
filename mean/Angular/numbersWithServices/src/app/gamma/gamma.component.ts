import { Component, OnInit } from '@angular/core';
import {SumService} from '../sum.service';

@Component({
  selector: 'app-gamma',
  templateUrl: './gamma.component.html',
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent implements OnInit {
    constructor(private _sumService: SumService) { }
    ngOnInit() {
    }
    difference = 0;
    gammaMethod() {
        this.difference = this._sumService.alphaNums.reduce(function(acc, val) { return acc + val; }) - this._sumService.betaNums.reduce(function(acc, val) { return acc + val; });
    }
}
