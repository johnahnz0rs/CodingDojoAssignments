import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Book } from '../../book';
import { BookService} from '../../services/book.service';


@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css', '../../bootstrap.css']
})
export class BookNewComponent implements OnInit {
    book: Book = new Book();

    @Output()
    createBook = new EventEmitter<Book>();


    constructor(private bookService: BookService,
        private router: Router) { }

    ngOnInit() {
    }

    onSubmit(event: Event, form: NgForm) {
        event.preventDefault();

        const { value, valid } = form;

        this.bookService.createBook(this.book)
            .subscribe(book => {
                // this.createBook.emit(book);
                this.router.navigateByUrl('/');
                this.book = new Book();

                form.reset();
            });

    }
}
