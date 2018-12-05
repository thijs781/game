//all the required constants
const express = require("express");
const http = require("http");
const cookies = require("cookie-parser");
const bodyParser = require("body-parser");

var users = 0; //counts the amount of user on the site
var activegames = 0; //keeps track of the amount of games being played

// give the player a cookie with an userId
app.use(cookies("secur")); // this will encrypt cookies to avoid users tampering with them
app.use(function(req, res, next) {
	var userId = req.signedCookies.userId; //recieve cookie (if any), from the user
	if(userId === undefined) { // check if the user has no cookie
		userId = ++users; // give the user an userId
		console.log("# Setting new cookie for user " + userId);
		res.cookie("userId", userId, {signed: true, httpOnly: true}); //make the cookie
	}
	req.userId = parseInt(userId); // store the parsed userId for the next components
    next(); // call on the next component
})


//creates the server and logs 'Server running....' !put at end of code!
http.createServer(app).listen(3000, function(){
    console.log("Server running....");
})