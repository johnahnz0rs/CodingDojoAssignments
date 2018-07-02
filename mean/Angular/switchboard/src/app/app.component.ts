import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    switches = [
        { text: 'off', 'class': 'off'},
        { text: 'off', 'class': 'off'},
        { text: 'off', 'class': 'off'},
        { text: 'off', 'class': 'off'},
        { text: 'off', 'class': 'off'},
        { text: 'off', 'class': 'off'},
        { text: 'off', 'class': 'off'},
        { text: 'off', 'class': 'off'},
        { text: 'off', 'class': 'off'},
        { text: 'off', 'class': 'off'}
    ];
    onButtonClick(id) {
        // console.log(id);
        if (this.switches[id].text == 'on') {
            this.switches[id] = {text: 'off', 'class': 'off'};
        } else {
            this.switches[id] = {text: 'on', 'class': 'on'};
        }
    }
}
