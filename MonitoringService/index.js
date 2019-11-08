var express = require('express');
var app = express();

app.get('/gettotal', function (req, res) {
	return res.status(200).send("Total earnings: ")
});

app.listen(8080, function() {
	console.log("Listening on port 8080")
});
