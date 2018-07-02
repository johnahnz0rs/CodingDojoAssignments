import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./bootstrap.css', './app.component.css']
})
export class AppComponent {
    success_message = false;
    newUser = null;
    users = [];
    user = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cPassword: null,
        street: '',
        unit: null,
        city: '',
        state: '',
        lucky: null
    };
    states = [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District Of Columbia',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming'
    ];
    onSubmit() {
        console.log('*****johnahnz0rs is l33t*****');
        console.log(this.user);
        this.success_message = true;
        this.newUser = this.user;
        this.users.push(this.user);
        this.user = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            cPassword: null,
            street: '',
            unit: '',
            city: '',
            state: '',
            lucky: null
        };
    }
    test() {
        console.log(this.users);
    }
}
