const mongoose = require('mongoose');
const Dog = require('./../models/dog.js');


module.exports = {

    index: function(request, response) {
        Dog.find({}, function (err, dogs) {
            if (err) {
                console.log(err);
                response.redirect('/');
            } else {
                response.render('index', {dogs: dogs});
            }
        });
    },

    oneDog: function(request, response, id) {
        Dog.findById(id, function (err, dog) {
            if (err) {
                console.log(err);
                response.redirect('/');
            }
            response.render('show', {dog: dog});
        });
    },

    newDogForm: function(request, response) {
        response.render('new');
    },

    createNewDog: function(request, response) {
        Dog.create(request.body, function (err) {
            if (err) {
                console.log(err);
            }
        });
        response.redirect('/');
    },

    editDog: function(request, response, id) {
        Dog.findById(id, function (err, dog) {
            if (err) {
                console.log(err);
            }
            response.render('edit', {dog: dog});
        });
    },

    updateDog: function(request, response, id) {
        Dog.update({_id: id}, request.body, function (err) {
            if (err) {
                console.log(err);
            }
        });
        response.redirect('/');
    },

    deleteDog(request, response, id) {
        Dog.remove({_id: id}, function (err) {
            if (err) {
                console.log(err);
            }
        });
        response.redirect('/');
    }

};