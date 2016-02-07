var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<script src="synaptic.js"></script><script src="creature.js"></script><script src="world.js"></script><h1>Hello World!</h1><div id="canvas-container" class="col-md-6"><canvas id="canvas" width="555" height="550"></canvas></div>');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});