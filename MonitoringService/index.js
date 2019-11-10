var express = require('express');
var app = express();
const fs = require('fs');

app.get('/gettotal', function (req, res) {
	
	var data = fs.readFileSync('my-log/log.log', 'utf8');
	var lines[] = data.split("\n");
	var total = 0;

	for(var i = 0; i < lines.length; i++)
	{
		var line[] = lines[i].split(" ");
		if(line[0] == "PURCHASE")
		{
			var total = total + line[3];	
		}
	}
	
	return res.status(200).send("Total earnings: $" + total);
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

app.get('/logtest', function (req, res) {
	var data = fs.readFileSync('my-log/log.log', 'utf8');
	res.send(data);
});

app.listen(8080, function() {
	console.log("Listening on port 8080")
});
