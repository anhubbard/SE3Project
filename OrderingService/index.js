var express = require('express');
var app = express();
const morgan = require('morgan');
const fs = require('fs');
var path = require('path');
var date = new Date();


var filein = fs.createWriteStream(path.join(__dirname, '/Test/log.log'), {flags: 'a'})
app.use(morgan('tiny', {stream: filein}))

app.get('/version', function (req, res) { 
	return res.status(200).send('This is version 1 of the HotBurger service');
});

app.get('/getmenu', function (req, res) {
	return res.status(200).send("Hotdog: $20\nHamburger: $35\nSoda: $4\nCookie: $6");
});

app.post('/purchase/:item/:quantity', function (req, res) {
	return res.status(200).send("Ordered: " + req.params.quantity + " " + req.params.item + "(s). (" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " UTC)" );
});

app.listen(80, function() {
	console.log("Listening on port 80");
});
