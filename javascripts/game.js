



var TurnOf = 0; //keeps track of whos turn it is
var PiecesLost1 = 0; //keeps track of the number of pieces Player 1 lost
var PiecesLost2 = 0; //keeps track of the number of pieces Player 2 lost


//Turn
//shows whos turn it is
//updates when player makes a turn
/////////////////////////////////////////////////////////////////////////


//pieceLost
//increments the counter of lost pieces of a player
function pieceLost(player){
	if(player == 1){
		PiecesLost1++; //if the player is Player1 increments the counter of lost pieces of Player1
		$("#P1_lost").html(PiecesLost1)
	}
	if(player == 2){
		PiecesLost2++; //if the player is Player2 increments the counter of lost pieces of Player2
		$("#P2_lost").html(PiecesLost2)
	}
}

//oponentof
//returns te playerid of the opponent of player
function opponentof(player){
	if(player==1) return 2;
	if(player==2) return 1;
}

//clearSquare
function clearSquare(x,y){
	$("#row"+y+"col"+x).empty();
}


//CanLeft
function CanLeft(x,y,player){
	$("#movbut").remove();
	var newx = x - 1;
	if(newx>=0){
		var newy = y - 1;
		if(newy>=0){
			if($("#row"+newy+"col"+newx).html() == "") {
				$("#row"+newy+"col"+newx).html("<button id='movbut' align='center' onclick='MoveLeft("+x+","+y+","+newx+","+newy+",false,"+player+")' class='mov'></button>");//make a button that let's the player do: MoveLeft(newx,newy,false,player)
			} 
			//if($("#row"+newy+"col"+newx) == pieceof(player)) return;
			else {  //check if can take
				newx--;
				if(newx>=0){
					newy--;
					if(newy>=0){
						if($("#row"+newy+"col"+newx).html() == "") { 
							$("#row"+newy+"col"+newx).html("<button id='movbut' align='center' onclick='MoveLeft("+x+","+y+","+newx+","+newy+",true,"+player+")' class='mov'></button>"); //make a button that let's the player do: MoveLeft(newx,newy,true,player)
							cantake = 1;
						}
					}
				}
			}
		}
	}
}


//MoveLeft
function MoveLeft(x,y,newx,newy,take,player){
	//$("#movbut").remove();
	$("#row"+newy+"col"+newx).html("<button id='2' align='center' onclick='CanLeft("+newx+","+newy+",1),CanRight("+newx+","+newy+",1)' class='P1'></button>");
	$("#row"+y+"col"+x).empty();
	if(take == true){
		clearSquare(newx+1,newy+1);
		pieceLost(opponentof(player));
	}
}


//CanRight
function CanRight(x,y,player){
	var newx = x + 1;
	if(newx<8){
		var newy = y - 1;
		if(newy>=0){
			if($("#row"+newy+"col"+newx).html() == "") {
				$("#row"+newy+"col"+newx).html("<button id='movbut' align='center' onclick='MoveRight("+x+","+y+","+newx+","+newy+",false,"+player+")' class='mov'></button>");//make a button that let's the player do: MoveLeft(newx,newy,false,player)
			} 
			//if($("#row"+newy+"col"+newx) == pieceof(player)) return;
			else {  //check if can take
				newx++;
				if(newx<8){
					newy--;
					if(newy>=0){
						if($("#row"+newy+"col"+newx).html() == "") { 
							$("#row"+newy+"col"+newx).html("<button id='movbut' align='center' onclick='MoveRight("+x+","+y+","+newx+","+newy+",true,"+player+")' class='mov'></button>"); //make a button that let's the player do: MoveLeft(newx,newy,true,player)
							cantake = 1;
						}
					}
				}
			}
		}
	}
}


//MoveRight
function MoveRight(x,y,newx,newy,take,player){
	//$("#movbut").remove();
	$("#row"+newy+"col"+newx).html("<button id='2' align='center' onclick='CanLeft("+newx+","+newy+",1),CanRight("+newx+","+newy+",1)' class='P1'></button>");
	$("#row"+y+"col"+x).empty();
	if(take == true){
		clearSquare(newx+1,newy+1);
		pieceLost(opponentof(player));
	}
}

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







