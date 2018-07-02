

export class Book {
    id: number;
    title: string;
    year: number;
    pages: number;
    author: string;
    publisher: string;

    constructor(createId = true) {
        if (createId) {
            this.id = Math.round(Math.random() * 1000);
        }
    }
}

