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


//update board
//updates the board on the website
/////////////////////////////////////////////////////////////////////////

//Turn
//shows whos turn it is
//updates when player makes a turn
//is akin to a main method
/////////////////////////////////////////////////////////////////////////


//CanLeft
//up 1, left 1 == open
//if false: up 2, left 2 == open

//MoveLeft
//if open: up 1, left 1
//if them: if open: up 2, left 2; then check if can hit again
/////////////////////////////////////////////////////////////////////////

//CanRight
//up 1, right 1 == open
//if false: up 2, right 2 == open

//MoveRight
//if open: up 1, right 1
//if them: if open: up 2, right 2; then check if can hit again
/////////////////////////////////////////////////////////////////////////

//CanLeftBack
//down 1, left 1 == open
//if false: down 2, left 2 == open

//MoveLeftBack
//if open: down 1, left 1
//if them: if open: down 2, left 2; then check if can hit again
/////////////////////////////////////////////////////////////////////////

//CanRightBack
//down 1, right 1 == open
//if false: down 2, right 2 == open

//MoveRightBack
//if open: down 1, right 1
//if them: if open: down 2, right 2; then check if can hit again
/////////////////////////////////////////////////////////////////////////



//creates the server and logs 'Server running....' !put at end of code!
http.createServer(app).listen(3000, function(){
    console.log("Server running....");
})





$("#rij1col1").html()