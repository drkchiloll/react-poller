var express = require('express');

var app = express();
app.use(express.static('./build'));
app.use(express.static('./node_modules/bootstrap/dist'));
app.listen(3000, function() {
  console.log('Server Listening on Port 3000')
});
