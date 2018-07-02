const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;

const app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist/books')));

require('./server/config/database');
app.use('/api', require('./server/config/routes'));
app.use(require('./server/config/routes/catch-all.route'));





// app.use(require('./server/config/routes/catch-all.route'));



app.listen(port, () => console.log(`express server listening on port ${port}`));