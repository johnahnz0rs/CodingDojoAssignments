const tasks = require('./../controllers/tasks.js');

module.exports = function(app) {

    app.get('/tasks', function(request, response) {
        tasks.getAllTasks(request, response);
    });

    app.get('/tasks/:id', function(request, response) {
        tasks.getOneTask(request, response);
    });

    app.post('/tasks', function(request, response) {
        tasks.newTask(request, response);
    });

    app.put('/tasks/:id', function(request, response) {
        // update task by id
        tasks.update(request, response);
    });

    app.delete('/tasks/:id', function(request, response) {
        tasks.delete(request, response);
    });

};