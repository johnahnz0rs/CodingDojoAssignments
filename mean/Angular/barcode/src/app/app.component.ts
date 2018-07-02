import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./bootstrap.css', './app.component.css']
})
export class AppComponent implements OnInit {
    barcode = [];
    colors = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'violet'
    ];
    getColors() {
        for (let i = 0; i < 10; i++) {
            let x = (Math.floor(Math.random() * 6));
            this.barcode.push(this.colors[x]);
        }
        return this.barcode;
    }
    onButtonClick(data) {
        console.log('johnahnz0rs is l33t', data);
    }
    ngOnInit() {
        return this.getColors();
    }
}
