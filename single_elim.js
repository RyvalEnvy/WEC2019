function single_elim(seeds, games) {
    // Games:
    // [ [A, B, B]  ] [PlayerA, PlayerB, winner]
    var n = seeds.length;

    var players = new Set()
    for (var i = 0; i < players.length; i++) {
        players.delete(players[i][2]);
    }

    var winner = players[0]
    var ranks = []
    return ranks;   // The function returns the product of p1 and p2
  }

function create_graph(seeds) {
    var n = seeds.length;
    var lowest_power_of_two = 1;
    var power_of_two_count = 0;
    while (lowest_power_of_two <= n/2) {
        lowest_power_of_two = lowest_power_of_two * 2;
        power_of_two_count++;
    };


    // Detect all byes
    var bye_count = n - lowest_power_of_two;
    var shuffled_list = [];

    if (bye_count != 0) {

        // Return random list of seeds
        var game_list = [];
        var j = 0;
        for (var i = 0; i < bye_count; i+=1) {
            shuffled_list.push([seeds[j], seeds[j+1]]);
            j = j + 2;
        }

        for (var j = bye_count*2 ; j < n; j+=1) {
            shuffled_list.push([seeds[j], ""]);
        }
        console.log("bye count, powertwo ", bye_count, lowest_power_of_two, seeds.length)

        // Randomizes the list
        for (var i = shuffled_list.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = shuffled_list[i];
            shuffled_list[i] = shuffled_list[j];
            shuffled_list[j] = temp;
        }
    } else {
        var game_list = [];
        var j = 0;
        for (var i = bye_count*2; i < n; i+=2) {
            shuffled_list.push([seeds[j], seeds[j+1]]);
            j = j + 2;
        }    
    }
    
    return shuffled_list;


}

function create_games(seeds) {
    // Feel free to change 'seeds' to this.seeds or something like that
    // Also feel free to save any useful variables to the state
    if (seeds.length <= 0) {
        return;
    }
    var n = seeds.length;
    var shuffled_list = [];

    // Return random list of seeds
    var shuffled_list = [];
    for (var i = 0; i < n; i+=2) {
        shuffled_list.push([seeds[i], seeds[i+1]]);
    }

    // Shuffles the list
    for (var i = shuffled_list.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = shuffled_list[i];
        shuffled_list[i] = shuffled_list[j];
        shuffled_list[j] = temp;
    }

    return shuffled_list;
       

}

// Test files
seeds = ["Eddie", "Kiran", "Liam", "Paul", "Yeeks", "Abcde", "garry", "oof" , "lMAOzeDong"];
console.log("seeds", seeds);
console.log(create_graph(seeds));