var express = require('express');
var app = express();
const axios = require('axios');

function orderFood() {
	
	var randItem = (Math.floor(Math.random() * 4) + 1);
	var quantity = (Math.floor(Math.random() * 10) + 1);
	var item

	switch(randItem)
	{
		case 1:
			item = "hotdog";
			break;
		case 2:
			item = "hamburger";
			break;
		case 3:
			item = "soda";
			break;
		case 4:
			item = "cookie";
			break;
		default:
			item = "hotdog";
			break;
	}
	
	axios.post('127.0.0.1:80/purchase/' + item + '/' + quantity, { 

	})
	.then(function() { 
		console.log("Purchased: " + quantity + " " + item + "(s).");
	})
	.catch(function(error) {
		console.log(error);
	});
}

setInterval(orderFood, 3000);


app.listen(8084, function() {
	console.log("Working on port 8084");
});
