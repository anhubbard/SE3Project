var express = require('express');
var app = express();
const morgan = require('morgan');
const axiox = require('axios');
const fs = require('fs');
var path = require('path');
var date = new Date();


//var filein = fs.createWriteStream(path.join(__dirname, 'log/log.log'), {flags: 'a'})
//app.use(morgan('tiny', {stream: filein}))


app.get('/version', function (req, res) { 
	
	fs.appendFile('my-log/log.log', ('VERSION '+ getTime() + '\n'), function (err) {});
	return res.status(200).send('This is version 2 of the HotBurger service');
});

app.get('/getmenu', function (req, res) {
	fs.appendFile('my-log/log.log', ('MENU ' + getTime() + '\n'), function (err) {});
	return res.status(200).send("Hotdog: $20\nHamburger: $35\nSoda: $4\nCookie: $6");
});

app.post('/purchase/:item/:quantity', function (req, res) {
	axios.post('http://fake_inventory_service:8082/getcount/' + req.params.item, {})
	.then(function(response) {
		if(response >= req.params.quantity)
		{
			fs.appendFile('my-log/log.log', ('PURCHASE ' + req.params.item + ' ' + getPrice(req.params.item, req.params.quantity) + getTime() + '\n'), function (err) {});
		}
		else
		{
			fs.appendFile('my-log/log.log', ('PURCHASE ' + req.params.item + ' ' + getPrice(req.params.item, 0) + getTime() + '\n'), function (err) {});
		}
	})
	.catch(function(error) {
		console.log(error);
	});

	return res.status(200).send("Purchase successful!");
});

function getPrice(item, quantity)
{
	if(item.toLowerCase() == "hotdog")
	{
		return('$ ' + (20*quantity) + ' ');
	}
	if(item.toLowerCase() == "hamburger")
        {
                return('$ ' + (35*quantity) + ' ');
        }
	if(item.toLowerCase() == "soda")
        {
                return('$ ' + (4*quantity) + ' ');
        }
	if(item.toLowerCase() == "cookie")
        {
                return('$ ' + (6*quantity) + ' ');
        }
}

function getTime()
{
	return(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "(UTC)");
}

app.listen(80, function() {
	console.log("Listening on port 80");
});
