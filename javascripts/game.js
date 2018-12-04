//all the required constants
const express = require("express");
const http = require("http");
const cookies = require("cookie-parser");
const bodyParser = require("body-parser");



var users = 0; //counts the amount of user on the site
var activegames = 0; //keeps track of the amount of games being played
var PiecesLost1 = 0; //keeps track of the number of pieces Player 1 lost
var PiecesLost2 = 0; //keeps track of the number of pieces Player 2 lost
var temp = 0; //DELETE WHEN DONE!!! 

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
/////////////////////////////////////////////////////////////////////////


//pieceLost
//increments the counter of lost pieces of a player
function pieceLost(player){
	if(player == 1)PiecesLost1++; //if the player is Player1 increments the counter of lost pieces of Player1
	if(player == 2)PiecesLost2++; //if the player is Player2 increments the counter of lost pieces of Player2
}

//oponentof
//returns te playerid of the opponent of player
function opponentof(player){
	if(player==1) return 2;
	if(player==2) return 1;
}

//clearSquare
function clearSquare(x,y){
	$("#row"+x+"col"+y).html() = null;
}
//CanLeft
function CanLeft(x,y,player){
	var newx = x - 1;
	if(newx<0) return;
	var newy = y - 1;
	if(newy<0)return;
	if(content(newx,newy) == null) $("#row"+newx+"col"+newy).html("insert button here"); //make a button that let's the player do: MoveLeft(newx,newy,false,player)
	if(content(newx,newy) == pieceof(player)) return;
	else { var tempo = 0; //check if can take
		newx--;
		if(newx<0) return;
		newy--;
		if(newy<0) return;
		if(content(newx,newy) == pieceof(opponentof(player))) $("#row"+newx+"col"+newy).html("insert button here");//make a button that let's the player do: MoveLeft(newx,newy,false,player)
	}
}


//MoveLeft
function MoveLeft(x,y,cont,take, player){
	content(x,y) = cont;
	if(take == true){
		clearSquare(newx+1,newy+1);
		pieceLost(oponentof(player));
	}
		

}
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



