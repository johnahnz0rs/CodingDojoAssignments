const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.Promise = global.Promise;


// mongoose.connection.on('connected', () => console.log('mongodb connected'));


module.exports = mongoose;