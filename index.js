var express = require('express');
var app = express();
const morgan = require('morgan');
const fs = require('fs');
var path = require('path')

var file = fs.createWriteStream(path.join(__dirname, 'log.log'), {flags: 'a'})
app.use(morgan('tiny', {stream: file}))

app.get('/version', function (req, res) { 
	res.send('This is version 0 of the HotBurger service');
});

app.get('/logs', function(req, res) {
	res.send('This will be the logs')
});

app.listen(80, function() {
	console.log("Listening on port 80");
});
