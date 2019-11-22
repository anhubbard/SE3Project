var express = require('express');
var app = express();
const axios = require('axios');

function orderFood() {
	
	console.log("Sent request!");

}

setInterval(orderFood, 3000);


app.listen(8084, function() {
	console.log("Working on port 8084");
});
