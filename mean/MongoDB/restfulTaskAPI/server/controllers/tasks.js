
const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {

    getAllTasks: function(request, response) {
        Task.find({}, function(error, tasks) {
            if (error) {
                console.log(error);
                response.json(error);
            } else {
                response.json(tasks);
            }
        });
    },

    getOneTask: function(request, response) {
        // console.log(request.params.id);
        Task.findOne({ _id: request.params.id }, function(error, task) {
            if (error) {
                response.json(error);
            } else {
                response.json(task);
            }
        });
    },

    newTask: function(request, response) {
        // console.log(request.params.title);
        // console.log(request.params.description);
        Task.create({ title: request.body.title, description: request.body.description }, function(error) {
            if (error) {
                response.json(error);
            } else {
                response.redirect('/tasks');
            }
        })
    },

    update: function(request, response) {
        Task.findById({ _id: mongoose.Types.ObjectId(request.params.id) }, function(error, task) {
            if (error) {
                response.json(error);
            } else {
                console.log('*******************************');
                console.log(task);
                if (typeof request.body.title != "undefined") {
                    console.log(request.body.title);
                    task.title = request.body.title;
                    task.save(function(error) {
                        if (error) {
                            response.json(error);
                        }
                    });
                }
                if (typeof request.body.description != "undefined") {
                    console.log(request.body.description);
                    task.description = request.body.description;
                    task.save(function(error) {
                        if (error) {
                            response.json(error);
                        }
                    });
                }
            }
        });
        response.redirect('/tasks');
    },

    delete: function(request, response) {
        Task.deleteOne({ _id: request.params.id }, function(error) {
            if (error) {
                response.json(error);
            } else {
                response.redirect('/tasks');
            }
        });
    }

};