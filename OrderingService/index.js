var express = require('express');
var app = express();
const morgan = require('morgan');
const fs = require('fs');
var path = require('path')

/*
var filein = fs.createWriteStream(path.join(__dirname, 'log.log'), {flags: 'a'})
app.use(morgan('tiny', {stream: filein}))
*/

app.get('/version', function (req, res) { 
	res.send('This is version 1 of the HotBurger service');
});

app.get('/getmenu', function (req, res) {
	res.send("Hotdog: $20\nHamburger: $35\nSoda: $4\nCookie: $6")
});

/*
app.get('/logs', function (req, res) {
	var data = fs.readFileSync('log.log', 'utf8');

	console.log(data);
	res.send(data);
});
*/

app.listen(80, function() {
	console.log("Listening on port 80");
});