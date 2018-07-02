const mongoose = require('mongoose');
const Dog = mongoose.model('Dog');
const dogs = require('./../controllers/dogs.js');

module.exports = function(app) {

    app.get('/', function (request, response) {
        // render a list of all doggos
        dogs.index(request, response);
    });

    app.get('/dogs/:id', function (request, response) {
        // render information about the selected dog
        dogs.oneDog(request, response, request.params.id);
    });

    app.get('/new', function (request, response) {
        // render a form for making a new mongoose
        dogs.newDogForm(request, response);
    });

    app.post('/dogs', function (request, response) {
        // action attribute from get.dogs/new
        dogs.createNewDog(request, response);
    });

    app.get('/dogs/edit/:id', function (request, response) {
        // render a form to edit an existing mongoose
        dogs.editDog(request, response, request.params.id);

    });

    app.post('/dogs/:id', function (request, response) {
        // action attribute from get.dogs/edit/:id
        dogs.updateDog(request, response, request.params.id);
    });

    app.post('/dogs/destroy/:id', function (request, response) {
        // delete the dog from database by id
        dogs.deleteDog(request, response, request.params.id);
    });

}