import { Book } from '../book';

export const BOOKS: Book[] = [
    {
        id: randomId(),
        title: 'Zen and the Art of Motorcycle Maintenance',
        author: 'Robert M. Pirsig',
        publisher: 'HarperTorch',
        pages: 540,
        year: 1974
    },
    {
        id: randomId(),
        title: 'The Autobiography of Benjamin Franklin',
        author: 'Benjamin Franklin',
        publisher: 'Value Classics',
        pages: 202,
        year: 1789
    },
    {
        id: randomId(),
        title: 'How to Win Friends and Influence People',
        author: 'Dale Carnegie',
        publisher: 'Simon & Schuster',
        pages: 288,
        year: 1936
    },
    {
        id: randomId(),
        title: 'The Little Prince',
        author: 'Antoine de Saint-Exupery',
        publisher: 'Reynal & Hitchcock',
        pages: 105,
        year: 1943
    },
    {
        id: randomId(),
        title: 'The Prince',
        author: 'Niccolo Machiavelli',
        publisher: 'Antonio Blado d\'Asola',
        pages: 83,
        year: 1532
    }
];

function randomId(): number  {
    return Math.floor(Math.random() * 1000);
}
