import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../../book';
import { BookService } from '../../services/book.service';

import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css', '../../bootstrap.css']
})
export class BookDetailComponent implements OnInit {
    @Input() book: Book;

    errorMessage: string;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private bookService: BookService
    ) { }

    ngOnInit() {
        // NOTE this one works, but it does something weird with 'null'
        this.bookService.getBook(this.route.snapshot.paramMap.get('bookID'))
            .subscribe(book => {
                console.log('got this book', book);
                this.book = book;
            },
                error => {
                    console.log('error', error);
                    this.errorMessage = error.statusText;

                    setTimeout(() => {
                        this.errorMessage = null;
                    }, 1000);
                }
            );
        // this.book = this.route.snapshot.data.book as Book;




        // this one also works but it's weird
        // this.route.params.pipe(switchMap((params: Params) => this.bookService.getBook(params.get('bookID'))))
        //     // .switchMap(params => this.bookService.getBook(params.get('bookID')))
        //
        //     .subscribe(book => {
        //         console.log('got book', book);
        //         this.book = book;
        //     },
        //     error => {
        //         console.log('error', error);
        //         this.errorMessage = error.statusText;
        //     }
        // );


        // this.route.paramMap
        //     .switchMap(params => this.bookService.getBook(params.get('bookID')))
        //     .subscribe(
        //         book => {
        //             console.log('got book', book);
        //             this.book = book;
        //         },
        //         error => {
        //             console.log('got an error', error);
        //             this.errorMessage = error.statusText;
        //
        //             setTimeout(() => {
        //                 this.errorMessage = null;
        //             }, 3000);
        //         }
        //     );
        //
        //
        // this.route.paramMap.pipe();
    }

}
