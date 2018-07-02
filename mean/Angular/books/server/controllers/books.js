const Book = require('mongoose').model('Book');


module.exports = {
    index(request, response) {
        Book.find({})
            .then(books => response.json(books))
            .catch(console.log);
    },
    show(request, response) {
        Book.findById(request.params.bookID)
            .then(book => response.json(book))
            .catch(console.log);
    },
    update(request, response) {
        Book.findByIdandUpdate(request.params.bookID, request.body, {new: true})
            .then(book => response.json(book))
            .catch(console.log);
    },
    create(request, response) {
        Book.create(request.body)
            .then(book => response.json(book))
            .catch(error => {
                    const errors = Object.keys(error.errors)
                        .map(key => error.errors[key].message);
                    response.json(errors);
            });
    },
    destroy(request, response) {
        Book.findByIdAndRemove(request.params.bookID)
            .then(book => response.json(book))
            .catch(console.log);
    }
};
