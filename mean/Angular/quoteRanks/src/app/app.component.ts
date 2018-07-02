import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./bootstrap.css', './app.component.css']
})
export class AppComponent {
    newQuote = {
        _id: null,
        rating: 0,
        quote: null,
        author: null
    };
    quotes = [
        {_id: 0, rating: 0, quote: 'Make war with a multitude of counselors', author: 'King Solomon'},
        {_id: 1, rating: 0, quote: 'A prince ought, above all things, always endeavour in every action to gain for himself the reputation' +
            ' of being' +
            ' a great and remarkable man.', author: 'Machiavelli'},
        {_id: 2, rating: 0, quote: 'Who wanna ride it? Won\'t cost you a dolla / ' +
            'Whether soft or harder, of course you still gonna holla / ' +
            'Mama, I\'m big, huh? I\'ll rip by prick through your hooters / ' +
            'I\'m sick, you couldn\'t measure my dick with six rulers.', author: 'Big Pun'}
    ];
    addQuote() {
        this.newQuote._id = Number(this.quotes.length);
        // this.newQuote = { _id: this.newId, quote: quote, author: author};
        console.log(this.newQuote);
        this.quotes.push(this.newQuote);
        this.newQuote = {
            _id: null,
            rating: 0,
            quote: null,
            author: null
        };
    }
    switch: boolean = true;
    voteUp(wowow) {
        console.log(wowow.value);
    }
    voteDown() {
        //
    }
    deleteQuote() {
        // array.splice(index, #ofdeletes);
    }
}
