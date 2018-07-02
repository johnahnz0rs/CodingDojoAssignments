const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
    response.sendFile(path.resolve('dist/books/index.html'));
    // response.sendFile(path.join('../../../dist/index.html'));
});


module.exports = router;