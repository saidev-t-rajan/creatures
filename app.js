var express = require('express');
var app = express();

app.use('/synaptic', express.static(__dirname + '/node_modules/synaptic/dist/'));
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});