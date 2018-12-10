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

//ClearOption
function ClearOption(){
	$("button").remove(".mov");
}

//CanLeft
function CanLeft(x,y,player){
	var newx = x - 1;
	if(newx>=0){
		var newy = y - 1;
		if(newy>=0){
			if($("#row"+newy+"col"+newx).html() == "") {
				$("#row"+newy+"col"+newx).html("<button id='movbut' align='center' onclick='MoveLeft("+x+","+y+","+newx+","+newy+",false,"+player+")' class='mov'></button>");//make a button that let's the player do: MoveLeft(newx,newy,false,player)
			}
			if($("#row"+newy+"col"+newx).html().includes('class="P'+opponentof(player)+'"')){//check if can take
				CanTakeLeft(x,y,player);
			}
		}
	}
}

//CanTakeLeft
function CanTakeLeft(x,y,player){
	var newx = x - 2;
	var newy = y - 2;
	if(newx>=0){
		if(newy>=0){
			if($("#row"+newy+"col"+newx).html() == "") { 
				$("#row"+newy+"col"+newx).html("<button id='movbut' align='center' onclick='MoveLeft("+x+","+y+","+newx+","+newy+",true,"+player+")' class='mov'></button>"); //make a button that let's the player do: MoveLeft(newx,newy,true,player)
				cantake = 1;
				var tempx = newx - 1;
				var tempy = newy - 1;
				if($("#row"+tempy+"col"+tempx).html().includes('class="P'+opponentof(player)+'"')) {  //check if can take
					CanTakeLeft(newx,newy,player);
				}
				tempx += 2;
				if($("#row"+tempy+"col"+tempx).html().includes('class="P'+opponentof(player)+'"')) {  //check if can take	
					CanTakeRight(newx,newy,player);
				}
			}
		}
	}
}

//MoveLeft
function MoveLeft(x,y,newx,newy,take,player){
	//$("#movbut").remove();
	$("#row"+newy+"col"+newx).html('<button id="2" align="center" onclick="ClearOption(),CanLeft('+newx+','+newy+','+player+'),CanRight('+newx+','+newy+','+player+')" class="P'+player+'"></button>');
	$("#row"+y+"col"+x).empty();
	if(take == true){
		clearSquare(newx+1,newy+1);
		pieceLost(opponentof(player));
	}
	$("#movbut").remove();
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
			if($("#row"+newy+"col"+newx).html().includes('class="P'+opponentof(player)+'"')) {  //check if can take
				CanTakeRight(x,y,player);
			}
		}
	}
}

//CanTakeRight
function CanTakeRight(x,y,player){
	var newx = x + 2;
	var newy = y - 2;
	if(newx>=0){
		if(newy>=0){
			if($("#row"+newy+"col"+newx).html() == "") { 
				$("#row"+newy+"col"+newx).html("<button id='movbut' align='center' onclick='MoveRight("+x+","+y+","+newx+","+newy+",true,"+player+")' class='mov'></button>");
				cantake = 1;
				var tempx = newx - 1;
				var tempy = newy - 1;
				if($("#row"+tempy+"col"+tempx).html().includes('class="P'+opponentof(player)+'"')) {  
					CanTakeLeft(newx,newy,player);
				}
				tempx += 2;
				if($("#row"+tempy+"col"+tempx).html().includes('class="P'+opponentof(player)+'"')) { 	
					CanTakeRight(newx,newy,player);
				}
			}
		}
	}
}

//MoveRight
function MoveRight(x,y,newx,newy,take,player){
	//$("#movbut").remove();
	$("#row"+newy+"col"+newx).html('<button id="2" align="center" onclick="ClearOption(),CanLeft('+newx+','+newy+','+player+'),CanRight('+newx+','+newy+','+player+')" class="P'+player+'"></button>');
	$("#row"+y+"col"+x).empty();
	if(take == true){
		clearSquare(newx-1,newy+1);
		pieceLost(opponentof(player));
	}
	$("#movbut").remove();
}






//CanBackLeft
function CanBackLeft(x,y,player){
	var newx = x - 1;
	if(newx>=0){
		var newy = y + 1;
		if(newy>=0){
			if($("#row"+newy+"col"+newx).html() == "") {
				$("#row"+newy+"col"+newx).html("<button id='movbut' align='center' onclick='MoveBackLeft("+x+","+y+","+newx+","+newy+",false,"+player+")' class='mov'></button>");//make a button that let's the player do: MoveLeft(newx,newy,false,player)
			}

			if($("#row"+newy+"col"+newx).html().includes('class="P'+opponentof(player)+'"')){//check if can take
				newx--;
				if(newx>=0){
					newy++;
					if(newy>=0){
						if($("#row"+newy+"col"+newx).html() == "") { 
							$("#row"+newy+"col"+newx).html("<button id='movbut' align='center' onclick='MoveBackLeft("+x+","+y+","+newx+","+newy+",true,"+player+")' class='mov'></button>"); //make a button that let's the player do: MoveLeft(newx,newy,true,player)
							cantake = 1;
						}
					}
				}
			}
		}
	}
}


//MoveBackLeft
function MoveBackLeft(x,y,newx,newy,take,player){
	//$("#movbut").remove();
	$("#row"+newy+"col"+newx).html('<button id="2" align="center" onclick="ClearOption(),CanBackLeft('+newx+','+newy+','+player+'),CanBackRight('+newx+','+newy+','+player+')" class="P'+player+'"></button>');
	$("#row"+y+"col"+x).empty();
	if(take == true){
		clearSquare(newx+1,newy-1);
		pieceLost(opponentof(player));
	}
	$("#movbut").remove();
}


//CanBackRight
function CanBackRight(x,y,player){
	var newx = x + 1;
	if(newx<8){
		var newy = y + 1;
		if(newy>=0){
			if($("#row"+newy+"col"+newx).html() == "") {
				$("#row"+newy+"col"+newx).html("<button id='movbut' align='center' onclick='MoveBackRight("+x+","+y+","+newx+","+newy+",false,"+player+")' class='mov'></button>");//make a button that let's the player do: MoveLeft(newx,newy,false,player)
			} 
			//if($("#row"+newy+"col"+newx) == pieceof(player)) return;
			if($("#row"+newy+"col"+newx).html().includes('class="P'+opponentof(player)+'"')) {  //check if can take
				newx++;
				if(newx<8){
					newy++;
					if(newy>=0){
						if($("#row"+newy+"col"+newx).html() == "") { 
							$("#row"+newy+"col"+newx).html("<button id='movbut' align='center' onclick='MoveBackRight("+x+","+y+","+newx+","+newy+",true,"+player+")' class='mov'></button>"); //make a button that let's the player do: MoveLeft(newx,newy,true,player)
							cantake = 1;
						}
					}
				}
			}
		}
	}
}


//MoveBackRight
function MoveBackRight(x,y,newx,newy,take,player){
	//$("#movbut").remove();
	$("#row"+newy+"col"+newx).html('<button id="2" align="center" onclick="ClearOption(),CanBackLeft('+newx+','+newy+','+player+'),CanBackRight('+newx+','+newy+','+player+')" class="P'+player+'"></button>');
	$("#row"+y+"col"+x).empty();
	if(take == true){
		clearSquare(newx-1,newy-1);
		pieceLost(opponentof(player));
	}
	$("#movbut").remove();
}







