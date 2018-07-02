import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./bootstrap.css', './app.component.css']
})
export class AppComponent {
    title = 'app';
    emails = [
        {email: 'bill@gates.com', important: false, subject: 'New Windows', content: 'Windows XI will launch in 2100.'},
        {email: 'ada@lovelace.com', important: false, subject: 'Programming', content: 'Enchantress of Numbers.'},
        {email: 'john@carmack.com', important: false, subject: 'Updated Algo', content: 'New Algorithm for shadow volumes.'},
        {email: 'gabe@gates.com', important: false, subject: 'HL3', content: 'Just kidding...'}
    ];
}
