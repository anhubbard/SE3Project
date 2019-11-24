var express = require('express');
var app = express();
const fs = require('fs');
var path = require('path');

app.get('/getcount/:item', function (req, res) {
	var lines = getLines();
	//var line = lines[lines.length-1];
	//var splitLine = line.split(" ");
	var itemToFind = req.params.item;
	itemToFind = itemToFind.toLowerCase();
	var response = 0;
	for(var i = 0; i < lines.length; i++)
	{
		var line = lines[i].split(" ");
		if(line[0].toLowerCase() == itemToFind)
		{
			response = line[1];
		}
	}

	console.log("there are " + response + " " + itemToFind + "(s) in the inventory");
	return res.status(200).send(response);
});

app.post('/setcount/:item/:quantity', function (req, res) {
	fs.appendFile('inventory.txt', (req.params.item + ' ' + req.params.quantity + '\n'), function(err) {});
	return res.status(200).send("Inventory updated!");
});

app.get('/inventorytest', function(req, res) {
	var data = fs.readFileSync('inventory.txt', 'utf8');
	res.send(data);
});

app.get('/test', function(req, res) {
	return res.status(200).send("working");
});

function getLines()
{
	var data = fs.readFileSync('inventory.txt', 'utf8');
        var lines = data.split("\n");
	return lines;
}

app.listen(8082, function() {
	console.log("Listening on port 8082");
});
