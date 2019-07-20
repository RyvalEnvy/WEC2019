import React from 'react';
import Bracket from './Bracket';
import PlayerList from './PlayerList';
import BracketColumn from './BracketColumn';

class TournamentBracket extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      round1:[],
      rounds: {},
      playerList:['Eddie','Liam','Paul','Kiran'],
      columns:1,
    }
    this.SetFirstRound = this.SetFirstRound.bind(this);
    this.NumberOfRounds=this.NumberOfRounds.bind(this);
    this.AddPlayer = this.AddPlayer.bind(this);
    this.create_games=this.create_games.bind(this);
  }

  create_games(seeds) {
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

  SetFirstRound(){
    this.setState({
        round1:this.create_games(this.state.playerList),
    });
  }

  AddPlayer(player){
    const newList = this.state.playerList;
    newList.push(player);
    this.setState({playerList:newList});
  }

  NumberOfRounds(){
    //This will find the number of match columns to display based on round one
    let numberOfInitialMatches = this.state.round1.length;
    this.setState({columns:Math.log2(numberOfInitialMatches)});
    return Math.log2(numberOfInitialMatches)
  }


  render(){
    const columns = []
    for(var i=0; i < this.NumberOfRounds ; i++){
      columns.push(<tr><BracketColumn numberOfMatches={Math.pow(i,2)}/></tr>)
    }
    return(
      <div>
        <PlayerList
          playerList={this.state.playerList}
          AddPlayer = {this.AddPlayer}
          SetFirstRound = {this.SetFirstRound}
        />
        <table>
          <tr>
          {
            this.state.round1.map((match) =>
              <Bracket
                TeamA ={match[0]}
                TeamB={match[1]}
                TeamAScore = {4}
                TeamBScore = {0}
              />
            )
          }
          </tr>
          {columns}
        </table>
      </div>
    );
  }
}

export default TournamentBracket;
