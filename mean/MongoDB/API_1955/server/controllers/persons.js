const Person = require('./../models/person.js');

module.exports = {

    index: function(req, res) {
        Person.find({}, function(err, persons) {
           if (err) {
               res.json(err);
           } else {
               console.log('***** index *****');
               res.json(persons);
           }
        });
    },

    new: function(req, res, name) {
        Person.create({name: name}, function(err) {
            if (err) {
                res.json(err);
            } else {
                console.log('***** create successful *****');
                res.redirect('/');
            }
        });
    },

    remove: function(req, res, name) {
        Person.deleteOne({name: name}, function(err) {
            if (err) {
                res.json(err);
            } else {
                console.log('***** remove successful *****');
                res.redirect('/');
            }
        });
    },

    details: function(req, res, name) {
        Person.findOne({name: name}, function(err, person) {
            if (err) {
                res.json(err);
            } else {
                console.log('***** details *****');
                res.json(person);
            }
        })
    }

};