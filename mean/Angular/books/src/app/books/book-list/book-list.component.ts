import { Component, OnInit } from '@angular/core';
import { Book } from '../../book';
import { BookService } from '../../services/book.service';


import { TitleizePipe } from '../../titleize.pipe';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css', '../../bootstrap.css'],
    providers: [TitleizePipe]
})
export class BookListComponent implements OnInit {

    books: Array<Book> = [];
    selectedBook: Book;
    filter: Book = new Book(false);

    constructor(private titleize: TitleizePipe,
                private bookService: BookService
    ) { }



    ngOnInit() {
        this.bookService.getBooks()
            .subscribe(books => this.books = books);


        this.books.forEach(book => {
            book.author = this.titleize.transform(book.author);
        });
    }

    selectBook(book: Book): void {
        console.log('selecting books', book);
        this.selectedBook = this.selectedBook === book ? null : book;

        // if (this.selectedBook === book) {
        //     this.selectedBook = null;
        // } else {
        //     this.selectedBook = book;
        // }
    }

    onCreate(event: Book): void {
        console.log('creating book', event);
        this.books.push(event);
    }

    clearFilter(): void {
        console.log('we are clearing filter');
        this.filter = new Book(false);
    }

    onClick(event: Event) {
        event.stopPropagation();
    }

    onDelete(id: number ) {
        console.log('delete book', id);
        this.bookService.deleteBook(id)
            .subscribe(returnedBook => {
                console.log(returnedBook);

                this.books = this.books.filter(b => {
                    b.id !== returnedBook.id;
                });
            });
    }

}
