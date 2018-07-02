const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/API_1955');
mongoose.Promise = global.Promise;

module.exports = mongoose;