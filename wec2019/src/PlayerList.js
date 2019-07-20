import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './PlayerList.css';

class PlayerList extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      text:'',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
     this.setState({text: e.target.value});
  }
  render(){
    return (
      <div className = "list-PlayerList" >
        <h1>
          List of Players
        </h1>
        {
          this.props.playerList.map((player) =>
            (
              <p>
              {player}
              </p>
              )
            )
        }
        <TextField
          onChange = {e => this.handleChange(e)}
          value = {this.state.text}
        />
        <Button onClick = {()=>{
          this.props.AddPlayer(this.state.text);
          this.setState({text:''});
        }}>
          Add Player
        </Button>
        <Button onClick = {()=>this.props.SetFirstRound()}>
          Setup Bracket
        </Button>
      </div>
    )
  }
}

export default PlayerList;
