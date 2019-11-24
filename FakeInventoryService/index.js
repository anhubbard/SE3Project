var express = require('express');
var app = express();
const fs = require('fs');
var path = require('path');

app.get('/getcount/:item', function (req, res) {
	return res.status(200).send("This will be where it checks to see if in inventory and sends the response");
});

app.post('/setcount/:item/:quantity', function (req, res) {
	fs.appendFile('inventory.txt', (req.params.item + ' ' + req.params.quantity);
	return res.status(200).send("Inventory updated!");
});

app.get('/test', function(req, res) {
	return res.status(200).send("working");
});

app.listen(8082, function() {
	console.log("Listening on port 8082");
});
