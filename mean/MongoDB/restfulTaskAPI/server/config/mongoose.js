const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/restfulTaskAPI');
mongoose.Promise = global.Promise;

module.exports = mongoose;