const router = require('express').Router();
const path = require('path');

router.all('*', function(request, response) {
  console.log('**** catch-all ****')
  console.log(request.url);

  console.log('***** route not found; sending to index *****');
  response.sendFile(path.join(__dirname, '../../dist/teamManager/index.html'));
});


module.exports = router;