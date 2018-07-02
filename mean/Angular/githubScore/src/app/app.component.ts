import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    user: User = new User();

    constructor(private _http: HttpClient, private _data: DataService) {}

    getScore(event: Event, form: NgForm): void {
        event.preventDefault();

        const { value, valid } = form;

        const apiURL = 'https://api.github.com/users/' + this.user.username;
        this.user.apiURL = apiURL;

        // console.log('app component - user object', this.user);
        // console.log('API URL', apiURL);

        this._data.getScore(apiURL)
            .subscribe(
                (response) => {
                    // console.log('Success!', response);
                    this.user.id = response['id'];
                    this.user.repos = response['public_repos'];
                    this.user.followers = response['followers'];
                    this.user.score = this.user.repos + this.user.followers;
                    if (this.user.score < 20) {
                        this.user.message = 'Needs Work!';
                        this.user.messageColor = 'red';
                    } else if (this.user.score >= 20 && this.user.score < 50) {
                        this.user.message = 'A decent start!';
                        this.user.messageColor = 'orange';
                    } else if (this.user.score >= 50 && this.user.score < 100) {
                        this.user.message = 'Doing good!';
                        this.user.messageColor = 'black';
                    } else if (this.user.score >= 100 && this.user.score < 200) {
                        this.user.message = 'Great job!';
                        this.user.messageColor = 'green';
                    } else if (this.user.score >= 200) {
                        this.user.message = 'Github Elite!';
                        this.user.messageColor = 'blue';
                    }
                    // console.log('user', this.user);
                },
                (error) => {
                    this.user.message = 'User does not exist, pick a different Github username';
                    this.user.messageColor = 'red';
                    // console.log('Error!', error);
                }
            );

        this.user = new User();

        form.reset;
    }
}
