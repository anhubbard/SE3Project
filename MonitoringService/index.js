var express = require('express');
var app = express();

app.get('/gettotal', function (req, res) {
	return res.status(200).send("Total earnings: ")
});

app.get('/gettopseller', function (req, res) {
	return res.status(200).send("Top selling item: ");
});

app.get('/getrequestcount', function (req, res) {
	return res.status(200).send("Total number of requests: ");
});

app.get('/getlastrequeststatus', function (req, res) {
	return res.status(200).send("Last request status: ");
});

app.get('/getlastrequesttime', function (req, res) {
	return res.status(200).send("Time of last request: ");
});

app.listen(8080, function() {
	console.log("Listening on port 8080")
});
