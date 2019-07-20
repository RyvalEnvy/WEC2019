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

    // Return random list of seeds
    var shuffled_list = seeds;

    for (let i = n; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled_list[i], shuffled_list[j]] = [shuffled_list[j], shuffled_list[i]];
    }

    return shuffled_list;
       

}