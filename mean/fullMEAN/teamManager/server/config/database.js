const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost/teamManager");
mongoose.connection.on('connected', function() {
  console.log('mongoose connected on mongodb://localhost/teamManager');
});
mongoose.connection.on('error', function(error) {
  console.log('***** mongoose connection error *****');
  console.log(error);
});