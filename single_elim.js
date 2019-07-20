function single_elim(seeds, games) {
    // Games:
    // [ [A, B, B]  ] [PlayerA, PlayerB, winner]

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
    while (lowest_power_of_two < n) {
        lowest_power_of_two = lowest_power_of_two * 2;
    };
}

function create_games(seeds) {
    // Feel free to change 'seeds' to this.seeds or something like that
    // Also feel free to save any useful variables to the state
    if (seeds.length <= 0) {
        return;
    }
    var n = seeds.length;

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
seeds = ["Eddie", "Kiran", "Liam", "Paul"];
console.log("seeds", seeds);
console.log(create_games(seeds));