const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');
const quotes = require('../controllers/quotes.js');

module.exports = function(app) {

    app.get('/', function (request, response) {
        quotes.index(request, response);
    });


    app.post('/quotes', function (request, response) {
        // code for post data (request.body)
        quotes.post_quote(request, response);
    });


    app.get('/quotes', function (request, response) {
        quotes.get_quotes(request, response);
    });


    app.get('/delete/:id', function(request, response) {
        quotes.delete_quote(request, response, request.params.id);
    });

};