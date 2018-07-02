import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap.css', './app.component.css']
})
export class AppComponent {
    time = null;
    timezone = '';
    onButtonClick(timezone) {
        this.time = new Date();
        // console.log('********', typeof (this.time), '********');
        // console.log(this.time);
        this.timezone = timezone;
        if (timezone == 'MST') {
            this.time.setHours(this.time.getHours() + 1);
        } else if (timezone == 'CST') {
            this.time.setHours(this.time.getHours() + 2);
        } else if (timezone == 'EST') {
            this.time.setHours(this.time.getHours() + 3);
        } else if (timezone == '') {
            this.time = '';
        }
    }
}
