import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-multiplier',
  templateUrl: './multiplier.component.html',
  styleUrls: ['./multiplier.component.css']
})
export class MultiplierComponent implements OnInit, OnChanges {
    @Input() powerLevel;
    allPowerLevels = [
        {power: null},
        {power: null},
        {power: null},
        {power: null, message: false},
        {power: null, message: false},
        {power: null, message: false}
    ];
    ngOnChanges() {
        if (this.allPowerLevels[3].power > 9000 && this.allPowerLevels[4].power <= 20000) {
            this.allPowerLevels[3].message = true;
        } else {
            this.allPowerLevels[3].message = false;
        }

        if (this.allPowerLevels[4].power > 20000 && this.allPowerLevels[5].power < 50000) {
            this.allPowerLevels[4].message = true;
        } else {
            this.allPowerLevels[4].message = false;
        }

        if (this.allPowerLevels[5].power == 50000) {
            this.allPowerLevels[5].message = true;
        } else {
            this.allPowerLevels[5].message = false;
        }
        this.allPowerLevels[0].power = this.powerLevel;
        this.allPowerLevels[1].power = this.powerLevel * 10;
        this.allPowerLevels[2].power = this.powerLevel * 90;
        this.allPowerLevels[3].power = this.powerLevel * 150;
        this.allPowerLevels[4].power = this.powerLevel * 250;
        this.allPowerLevels[5].power = this.powerLevel * 500;
    }
    constructor() {
    }
    ngOnInit() {
    }
}
