const bookRouter = require('./book.routes');
const router = require('express').Router();


module.exports = router.use('/books', bookRouter);