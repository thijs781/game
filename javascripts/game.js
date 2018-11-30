// CanMoveLeft
//check if there is a space open 1 row up and 1 colum left.

//need to define type pos and how to get rownr and colnr from it.
function(pos){
    var posr;
    var posc;
    var posl = new pos (posr,posc);
    var inposl = $(posl).html();
    if(inposl==null) return true;
    else return false;
}

//CanTakeLeft
//check if 1up,1left is enemy, then check if 2up,2left is open
//if can take: check if can take left or right again.

//CanMoveRight
//check if ther is a space available 1 row up and 1 colum right. 

//CanTakeRight
//check if 1up,1right is enemy, then check if 2up,2right is open
//if can take: check if can take left or right again.

//MoveRight
//if 1up 1right is available move there

//TakeRight
//if CanTakeRight: go 2up,2right and remove enemy, increment pieces_lost_enemy

//MoveLeft
//if 1up 1left is available, move there

//TakeLeft
//if CanTakeLeft: go 2up,2left and remove enemy, increment pieces_lost_enemy



// CanMoveLeftBack
//check if there is a space open 1 row down and 1 colum left.

//CanTakeLeftBack
//check if 1down,1left is enemy, then check if 2down,2left is open
//if can take: check if CanTakeLeftBack or CanTakeRightBack or CanTakeLeft or CanTakeRight again.

//CanMoveRightBack
//check if ther is a space available 1 row down and 1 colum right. 

//CanTakeRightBack
//check if 1down,1right is enemy, then check if 2down,2right is open
//if can take: check if CanTakeLeftBack or CanTakeRightBack or CanTakeLeft or CanTakeRight again.

//MoveRightBack
//if 1down 1right is available move there

//TakeRightBack
//if CanTakeRight: go 2back,2right and remove enemy, increment pieces_lost_enemy

//MoveLeftBack
//if 1back 1left is available, move there

//TakeLeftBack
//if CanTakeLeft: go 2down,2left and remove enemy, increment pieces_lost_enemy


//implement movement for enemy next


$("#rij1col1").html()