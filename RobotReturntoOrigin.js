/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {

    var Ustore = 0;
    var Dstore = 0;
    var Rstore = 0;
    var Lstore = 0;

    for (var i = 0; i < moves.length; i++) {
        if (moves[i] === "U") Ustore += 1;
        if (moves[i] === "D") Dstore += 1;
        if (moves[i] === "R") Rstore += 1; 
        if (moves[i] === "L") Lstore += 1;
    }

    if (Ustore === Dstore && Rstore === Lstore) return true;
    return false;
};


// UD moves up from initial position, moves down from initial position resulting in return to origin
// LL moves left from initial position, moves left again from secondary position, resulting in being away from origin


//UDUD
// UUUDDDD
//UUU
//DDDD
//UUULLRDDDR
//U-3
//L-2
//R-2
//D-3

// if number of U chars is equal to Number of D chars && Number of R chars is equal to Number of L chars return true