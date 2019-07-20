import React from 'react';
import Bracket from './Bracket';
import PlayerList from './PlayerList';

class TournamentBracket extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rounds: {
        round1:[['Eddie','Kiran'],['Liam','Paul'],['George','Luke'],['Michelle','Ross']],
      },
      playerList:['Eddie','Liam','Paul'],
      columns:1,
    }
    this.NumberOfColumns();
    this.AddPlayer = this.AddPlayer.bind(this);
  }

  AddPlayer(player){
    const newList = this.state.playerList;
    newList.push(player);
    console.log(newList);
    this.setState({playerList:newList});
  }

  NumberOfRounds(){
    //This will find the number of match columns to display based on round one
    let numberOfInitialMatches = this.state.rounds.round1.length;
    this.setState({columns:Math.log2(numberOfInitialMatches)});
    console.log(Math.log2(numberOfInitialMatches));
  }


  NewRound(){

  }

  render(){
    return(
      <div>
        <PlayerList
          playerList={this.state.playerList}
          AddPlayer = {this.AddPlayer}
        />
        {
          this.state.rounds.round1.map((match) =>
            <Bracket
              TeamA ={match[0]}
              TeamB={match[1]}
              TeamAScore = {4}
              TeamBScore = {0}
            />
          )
       }

      </div>
    );
  }
}

export default TournamentBracket;
