// server setup
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/messageBoard');
mongoose.Promise = global.Promise;

// schema & models
var Schema = mongoose.Schema;
var MessageSchema = new mongoose.Schema({
	name: {type: String, required: true},
	message: {type: String, required: true},
	_comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});

MessageSchema.path('name').required(true, 'Name cannot be blank');
MessageSchema.path('message').required(true, 'Message cannot be blank');
mongoose.model("Message", MessageSchema);
var Message = mongoose.model("Message");


var CommentSchema = new mongoose.Schema({
	name: {type: String, required: true},
	comment: {type: String, required: true},
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
}, {timestamps: true});
CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('comment').required(true, 'Comment cannot be blank');
mongoose.model("Comment", CommentSchema);
var Comment = mongoose.model("Comment");



// helper functions
function printErrors(err) {
	if (err) {
		console.log(err);
		return err;
	} else {
		console.log('success');
		return;
	}
	
}


// routes
app.get('/', function(request, response) {
	// console.log('***** this is root route *****');

	Message.find({}).populate('_comments').exec(function(err, messages) {
		response.render('index', {messages: messages});
	});
});

app.post('/message', function(request, response) {
	// console.log('***** this is post./message *****');
	// console.log('***** formdata: ', request.body, ' *****');

	var newMessage = new Message({ name: request.body.name, message: request.body.message });
	newMessage.save(function(err) {
		if (err) {
			console.log(err);
			response.render('index', {errors: newMessage.errors});
		}
	});
	response.redirect('/');
});

app.post('/comment', function(request, response) {
	console.log('***** this is post./comment *****');

	Message.findOne({_id: request.body.id}, function(err, message) {
		// console.log('newComment = ' + newComment);
		// console.log('******* lol *******');

		var newComment = new Comment({ name: request.body.name, comment: request.body.comment });
		newComment._message = message._id;
		Message.update({ _id: message._id}, {$push: { _comments: newComment }}, function(err) {
	
		});
		newComment.save(function(err) {
			if (err) {
				console.log(err);
				response.render('/index', {errors: newComment.errors});
			}
		});
		
	});
	response.redirect('/');
});


// start server
app.listen(1337, function() {
	console.log('johnahnz0rs is listening on port 1337');
})