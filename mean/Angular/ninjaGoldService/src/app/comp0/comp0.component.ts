import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-comp0',
    templateUrl: './comp0.component.html',
    styleUrls: ['./comp0.component.css']
})
export class Comp0Component implements OnInit {
    constructor(private _dataService: DataService) {
        _dataService.goldCountChange.subscribe(x => this.goldCount = x);
    }
    goldCount: number;

    ngOnInit() {
        this.goldCount = this._dataService.goldCount;
    }

}
