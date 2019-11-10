var express = require('express');
var app = express();
const fs = require('fs');

app.get('/gettotal', function (req, res) {
	
	var lines = getLines();
	var total = 0;

	for(var i = 0; i < lines.length; i++)
	{
		var line = lines[i].split(" ");
		if(line[0] == "PURCHASE")
		{
			//console.log(parseInt(line[3]));
			total += parseInt(line[3]);	
		}
	}
	
	return res.status(200).send("Total earnings: $" + total);
});

app.get('/gettopseller', function (req, res) {
	
	var lines = getLines();
	
	var hotdog = 0;
	var hamburger = 0;
	var soda = 0;
	var cookie = 0;

	for(var i = 0; i < lines.length; i++)
	{
		var line = lines[i].split(" ");
		if(line[0] == "PURCHASE")
		{
			if(line[1].toLowerCase() == "hotdog")
				hotdog++;
			if(line[1].toLowerCase() == "hamburger")
                                hamburger++;
			if(line[1].toLowerCase() == "soda")
                                soda++;
			if(line[1].toLowerCase() == "cookie")
                                cookie++;
		}
	}

	if(hotdog > hamburger && hotdog > soda && hotdog > cookie)
		return res.status(200).send("Top selling item: Hotdog");
	else if(hambuger >= hotdog && hamburger >= soda && hamburger >= cookie)
                return res.status(200).send("Top selling item: Homburger");
	else if(soda >= hamburger && soda >= hotdog && soda >= cookie)
                return res.status(200).send("Top selling item: Soda");
	else if(cookie >= hamburger && cookie >= soda && cookie >= hotdog)
                return res.status(200).send("Top selling item: Cookie");
});

app.get('/getrequestcount', function (req, res) {
	var lines = getLines();
	var count = (lines.length-1)
	return res.status(200).send("Total number of requests: " + count);
});

app.get('/getlastrequeststatus', function (req, res) {
	return res.status(200).send("Last request status: 200"); //Since if the request is in the logs, it will always be 200.
});

app.get('/getlastrequesttime', function (req, res) {
	var lines = getLines();
	var currentLine = (lines.length-2);
	var line = lines[currentLine];
	
	var time = line[4];
	console.log(time);

	if(line[0] == "PURCHASE")
	{
		console.log(line);
		console.log("0: " + line[0].toString());
		console.log("1: " + line[1].toString());
		console.log("2: " + line[2].toString());
		console.log("3: " + line[3].toString());
		console.log("4: " + line[4].toString());
		return res.status(200).send("Time of last request: " + line[4]);
	}
	else
	{
		console.log(line);
		console.log(line[1].toString());
		return res.status(200).send("Time of last request: " + line[1]);
	}
});

app.get('/logtest', function (req, res) {
	var data = fs.readFileSync('my-log/log.log', 'utf8');
	res.send(data);
});

function getLines()
{
	var data = fs.readFileSync('my-log/log.log', 'utf8');
        var lines = data.split("\n");
	return lines;
}

app.listen(8080, function() {
	console.log("Listening on port 8080")
});
