function bestOf3(matchList) {
    'Takes in the current match players as an array and prompt user up to 3 times to input score'
    
a
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
    // Checking if a already won 2/3 games
    score = [game1, game2]
    if ( (games[0] + games[1]) == 2){
        return([matchList[0], score])
    }else if( (games[0] + games[1]) == 0){
        return([matchList[1], score])
    }

    var game3 = []
    game3[0] = prompt('Team ' + matchList[0] +' score:'); // Getting the game 1 scores
    game3[1] = prompt('Team ' + matchList[1] +' score:');
    if (game3[0] < game3[1]){
        games[2] = 0 //Dummy integer for simple tracking of wins and losses, 0 for a win for team 2 and 1 for team 1
    } else {
        games[2] = 1
    }
    
    //Checking for who won 2/3 games
    score = [game1, game2, game3]
    if ( (games[0] + games[1] + games[2]) == 2){
        return([matchList[0], score])
    }else if( (games[0] + games[1] + games[2]) == 1){
        return([matchList[1], score])
    }
    
}

    

