var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(3030, function() {
  console.log('Express server is up on port 3030');
});
