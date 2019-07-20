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
      ScoreSheet: [['team1','team2',5,7],['team3','team4',6,1],['team5','team6',1,2],['team7','team8',6,4]],
      playerList:['Eddie','Liam','Paul','Kiran'],
      columns:1,
    }
    this.SetFirstRound = this.SetFirstRound.bind(this);
    this.AddPlayer = this.AddPlayer.bind(this);
    this.create_games=this.create_games.bind(this);
    this.PaulsFunction = this.PaulsFunction.bind(this);
    this.GetScores = this.GetScores.bind(this);
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

  PaulsFunction(array){
    var winningteams = [];
      var arrayLength = array.length;
      for(var matchup = 0; matchup < arrayLength; matchup++) {
        var firstscore = array[matchup][2];
        var secondscore = array[matchup][3];
        if (firstscore > secondscore) {
          winningteams.push(array[matchup][0]);
        } else {
          winningteams.push(array[matchup][1]);
        }
      }
      var matchups = [];
      var numGroups = arrayLength/2;
      for(var group = 0; group < numGroups; group++) {
        var match = [winningteams[2*group],winningteams[2*group+1]];
        matchups.push(match);
      }
      return matchups;
  }

  GetScores(TeamA,TeamB,TeamAScores,TeamBScores){
    let newScores = this.state.ScoreSheet;
    newScores.push([TeamA,TeamB,TeamBScores,TeamBScores]);
    this.setState({ScoreSheet:newScores});
  }

  SetFirstRound(){
    this.setState({
        round1:this.create_games(this.state.playerList),
        columns:Math.log2(this.create_games(this.state.playerList)),
    });
  }

  AddPlayer(player){
    const newList = this.state.playerList;
    newList.push(player);
    this.setState({playerList:newList});
  }


  render(){
    const columns = []
    for(var i=0; i < this.state.columns ; i++){
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
                GetScores = {this.GetScores}
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
