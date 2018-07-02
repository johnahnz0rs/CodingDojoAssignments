import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Book } from '../book';

import { BOOKS } from '../data/book-data';

// import { tap, map } from 'rxjs/operators';



@Injectable()
export class BookService {
    // private base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';
    private base = 'api/books';


    constructor(private http: HttpClient) {}


    getBooks(): Observable<Book[]> {
        // return of(BOOKS);
        return this.http.get<Book[]>(this.base);
    }

    createBook(book: Book): Observable<Book> {
        return this.http.post<Book>(this.base, book);
    }

    deleteBook(id: number): Observable<Book> {
        return this.http.delete<Book>(`${this.base}/${id}`);
    }

    getBook(id: string): Observable<Book> {
        return this.http.get<Book>(`${this.base}/${id}`);
    }

}
