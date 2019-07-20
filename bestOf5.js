function bestOf5(matchList) {
    'Takes in the current match players as an array and prompt user up to 5 times to input score'
    
    
    var games = []

    var game1 = []
    game1[0] = prompt('Team ' + matchList[0] +' score:') // Getting the game 1 scores
    game1[1] = prompt('Team ' + matchList[1] +' score:')
    if (game1[0] < game1[1]){
        games[0] = 0 //Dummy integer for simple tracking of wins and losses, 0 for a win for team 2 and 1 for team 1
    } else {
        games[0] = 1
    }

    var game2 = []
    game2[0] = prompt('Team ' + matchList[0] +' score:') // Getting the game 2 scores
    game2[1] = prompt('Team ' + matchList[1] +' score:')
    if (game2[0] < game2[1]){
        games[1] = 0 //Dummy integer for simple tracking of wins and losses, 0 for a win for team 2 and 1 for team 1
    } else {
        games[1] = 1
    }

    var game3 = []
    game3[0] = prompt('Team ' + matchList[0] +' score:'); // Getting the game 1 scores
    game3[1] = prompt('Team ' + matchList[1] +' score:');
    if (game3[0] < game3[1]){
        games[2] = 0 //Dummy integer for simple tracking of wins and losses, 0 for a win for team 2 and 1 for team 1
    } else {
        games[2] = 1
    }
    
     // Checking if a team already won 3/5 games
     score = [game1, game2]
     if ( (games[0] + games[1] + games[2]) == 3){
         return([matchList[0], score])
     }else if( (games[0] + games[1] + games[2]) == 0){
         return([matchList[1], score])
     }
     
     var game4 = []
     game4[0] = prompt('Team ' + matchList[0] +' score:'); // Getting the game 1 scores
     game4[1] = prompt('Team ' + matchList[1] +' score:');
     if (game4[0] < game4[1]){
         games[3] = 0 //Dummy integer for simple tracking of wins and losses, 0 for a win for team 2 and 1 for team 1
     } else {
         games[3] = 1
     }

    //Checking for who won 3/5 games after the 4th
    score = [game1, game2, game3, game4]
    if ( (games[0] + games[1] + games[2] + games[3]) == 3){
        return([matchList[0], score])
    }else if( (games[0] + games[1] + games[2] + games[3]) == 1){
        return([matchList[1], score])
    }

    var game5 = []
     game5[0] = prompt('Team ' + matchList[0] +' score:'); // Getting the game 1 scores
     game5[1] = prompt('Team ' + matchList[1] +' score:');
     if (game5[0] < game5[1]){
         games[4] = 0 //Dummy integer for simple tracking of wins and losses, 0 for a win for team 2 and 1 for team 1
     } else {
         games[4] = 1
     }

    //Checking for who won 3/5 games after the 5th game
    score = [game1, game2, game3, game4]
    if ( (games[0] + games[1] + games[2] + games[3] + games[4]) == 3){
        return([matchList[0], score])
    }else if( (games[0] + games[1] + games[2] + games[3] + games[4] ) == 2){
        return([matchList[1], score])
    }
    
}