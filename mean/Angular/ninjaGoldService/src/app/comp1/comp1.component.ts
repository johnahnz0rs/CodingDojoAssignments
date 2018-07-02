import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AppComponent} from '../app.component';


@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
    rando: number;
    buildings;
    newString: string;
    constructor(private _dataService: DataService, private _appComponent: AppComponent) { }
    ngOnInit() {
      this.buildings = this._dataService.buildings;
    }
    // when someone clicks a button
    myMethod(building) {
        if (building == 'Farm') {
            // 2-5
            // find a random number
            this.rando = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
            this._appComponent.goldCount += this.rando;
            this.newString = "You've earned " + String(this.rando) + " gold at the Farm";
            this._dataService.activities.push(this.newString);
        } else if (building == 'Cave') {
            // 5-10
            this.rando = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
            this._appComponent.goldCount += this.rando;
            this.newString = "You've earned " + String(this.rando) + " gold at the Cave";
            this._dataService.activities.push(this.newString);
        } else if (building == 'Casino') {
            // +- 100
            this.rando = Math.floor(Math.random() * (100 + 100 + 1)) -100;
            this._appComponent.goldCount += this.rando;
            if (this.rando >= 0) {
                this.newString = "You've earned " + String(this.rando) + " gold at the Casino";
                this._dataService.activities.push(this.newString);
            } else {
                this.newString = "You've lost " + String(-this.rando) + " gold at the Casino because you're a degenerate gambler"
                this._dataService.activities.push(this.newString);
            }
            console.log(this.rando);
        } else if (building == 'House') {
            // 7-15
            this.rando = Math.floor(Math.random() * (15 - 7 + 1)) + 7;
            this._appComponent.goldCount += this.rando;
            this.newString = "You've earned " + String(this.rando) + " gold at the House";
            this._dataService.activities.push(this.newString);
        }
    }
}
