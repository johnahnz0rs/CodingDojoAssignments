import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as fromBooks from './books';
import {BookResolve} from './resolvers';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
    },
    {
        path: 'books',
        component: fromBooks.BookListComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: fromBooks.BookListComponent
            },
            {
                path: 'new',
                pathMatch: 'full',
                component: fromBooks.BookNewComponent
            },
            {
                path: ':bookID',
                pathMatch: 'full',
                component: fromBooks.BookDetailComponent,
                resolve: {
                    book: BookResolve
                }
            }
        ]
    }

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
