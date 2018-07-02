// **********
// SERVER SETUP
// **********
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcrypt-as-promised');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1);
app.use(session({
	secret: 'secretsecret',
	resave: false,
	saveUninitialized: true,
	cookie: {maxAge: 60000}
}));

mongoose.connect('mongodb://localhost/dojoSecrets');
mongoose.Promise = global.Promise;




// **********
// SCHEMAS & MODELS
// **********
const Schema = mongoose.Schema;

// User
const UserSchema = new mongoose.Schema({
	first_name: String,
	last_name: String,
	birthday: Date,
	email: String,
	password: String,
	_secrets: [{ type: Schema.Types.ObjectId, ref: 'Secret' }]
}, {timestamps: true});

UserSchema.path('first_name').required('true', 'Please enter your name');
UserSchema.path('last_name').required('true', 'Please enter your name');
UserSchema.path('birthday').required('true', 'Please enter your birthday');
UserSchema.path('email').required('true', 'Please enter your email');
UserSchema.path('password').required('true', 'Please enter a password');

mongoose.model('User', UserSchema);
const User = mongoose.model('User');

// Secret
const SecretSchema = new mongoose.Schema({
	secret: String,
    comments: Array,
	_user: { type: Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true});

SecretSchema.path('secret').required('true', 'Please tell me your secret');
SecretSchema.path('_user').required('true', 'Please enter a user id');

mongoose.model('Secret', SecretSchema);
const Secret = mongoose.model('Secret');




// **********
// ROUTES
// **********

// CREATE
// new user OK
app.post('/register', function(request, response) {
    if (request.body.password === request.body.c_password) {
        bcrypt.hash(request.body.password, 10)
            .then(hashed_password => {
                User.create({ first_name: request.body.first_name, last_name: request.body.last_name, birthday: request.body.birthday, email: request.body.email, password: hashed_password })
                    .then(user => {
                        // console.log('***** ' + user + ' added successfully *****');
                        response.render('index', {error: 'registration successful; please log in to continue'});
                    })
                    .catch(err => {
                        // console.log(err);
                        response.render('index', { error: err });
                    });
            });
    } else {
        // console.log('passwords much match');
        response.render('index', {error: 'passwords must match'});
    }
});

// new secret OK
app.post('/secrets', function(request, response) {
    // Secret.create using formdata (remember to log the _id)
    if (request.body.secret < 1) {
        response.render('secrets', {error: "tell me your secret"});
    } else {
        User.findOne({_id: request.session.user_id}, function(error, user) {
            if (error) {
                // console.log(error);
                response.render('secrets', {error: error});
            } else {
                let newSecret = new Secret({secret: request.body.secret});
                newSecret._user = user._id;
                User.update({_id: user._id}, {$push: {_secrets: newSecret}}, function (error) {
                    if (error) {
                        // console.log(error);
                        response.render('secrets', {error: error});
                    }
                });
                newSecret.save(function (error) {
                    if (error) {
                        // console.log(error);
                        response.render('secrets', {error: error});
                    }
                });
            }
        });
        response.redirect('/secrets');
    }
});

// new comment OK
app.post('/comment', function(request, response) {
    // lol stfu
    if (typeof request.session.user_id !== 'undefined') {
        Secret.findOne({ _id: mongoose.Types.ObjectId(request.body.secret_id) }, function(error, secret) {
            if (error) {
                // console.log(error);
                response.redirect('/');
            } else {
                Secret.update({_id: secret._id}, {$push: {comments: request.body.comment}}, function (error) {
                    if (error) {
                        // console.log(error);
                        response.redirect('/');
                    } else {
                        let redirect_string = '/secrets/' + request.body.secret_id;
                        response.redirect(redirect_string);
                    }
                });
            }
        });

    } else {
        // user is not logged in
        response.redirect('/');
    }
});


// Read
// index OK
app.get('/', function(request, response) {
    if (typeof request.session.user_id !== 'undefined') {
        response.redirect('/secrets');
    } else {
        response.render('index');
    }
});

// login OK
app.post('/login', function(request, response) {
    if (request.body.email.length < 1 || request.body.password.length < 1) {
        response.render('index', {error: 'please enter all fields'});
    } else {
        User.findOne({ email: {$in: request.body.email} })
            .then(user => {
                bcrypt.compare(request.body.password, user.password)
                    .then(pass => {
                        if (user && pass === true) {
                            request.session.user_id = user._id;
                            request.session.save(function(err) { });
                            response.redirect('/secrets');
                        } else {
                            // console.log('error');
                            response.render('index', { error: 'incorrect password'});
                        }
                    })
                    .catch(error => {
                        // console.log(error);
                        response.render('index', { error: 'incorrect password bro' });
                    })
            })
            .catch(error => {
                // console.log(error);
                response.render('index', { error: error });
            })
    }
});

// view all secrets after login OK
app.get('/secrets', function(request, response) {
    if (typeof request.session.user_id !== 'undefined') {
        // logic to display all secrets:
        Secret.find().populate('_user').exec(function(error, secrets) {
            if (error) {
                // console.log(error);
                response.render('secrets', {error: error});
            } else {
                // console.log(secrets);
                request.session.secrets = secrets;
                request.session.save(function(err) { });
                response.render('secrets', {session: request.session});
            }
        });

    } else {
        response.redirect('/');
    }

});

// view specific secret OK
app.get('/secrets/:id', function(request, response) {
    // add logic to display a single secret:
    // Secret.find({ id: id})
    // console.log('this is get.secrets.id');
    if (typeof request.session.user_id !== 'undefined') {
        Secret.findOne({ _id: mongoose.Types.ObjectId(request.params.id)}).populate('_comments').exec(function(error, secret) {
            if (error) {
                // console.log(error);
                response.redirect('/');
            } else {
                // console.log(secret);
                request.session.this_secret = secret;
                response.render('details', {session: request.session});
            }
        });

    } else {
        response.redirect('/');
    }

});

// logout OK
app.get('/logout', function(request, response) {
    // log out of session
    request.session.destroy();
    response.redirect('/');
});


// Delete
app.get('/delete/:id', function(request, response) {
    // console.log('this is /delete/id');
    if (typeof request.session.user_id !== 'undefined') {
        Secret.findOne({_id: mongoose.Types.ObjectId(request.params.id)}, function(error, secret) {
            if (error) {
                // console.log(error);
                response.redirect('/secrets')
            } else {
                // console.log(secret);
                // console.log('secret._user', typeof secret._user);
                // console.log('session.user_id', typeof request.session.user_id);
                // console.log('this is the secret object', secret);
                if (secret._user == request.session.user_id) {
                    Secret.remove({_id: mongoose.Types.ObjectId(request.params.id)}, function(error) {
                        if (error) {
                            // console.log(error + 'cannot remove ************');
                            response.redirect('/secrets');
                        }
                    });
                } else {
                    // console.log('**************user idS dont match');
                    response.redirect('/secrets');
                }
            }
        });
        response.redirect('/secrets');

    } else {
        //user not logged in
        response.redirect('/');
    }
});















// **********
// START SERVER
// **********
app.listen(1337, function() {
	console.log('johnahnz0rs is listening on port 1337');
});