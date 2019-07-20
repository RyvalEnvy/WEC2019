import React from 'react';
import './Bracket.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Bracket extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      TeamAScore:0,
      TeamBScore:0,
    }
  }
  handleChange(e,target){
     this.setState({[target]: e.target.value});
  }
  render(){
    return(
      <div>
        <table>
          <tr>
            <th>
              Team Name
            </th>
            <th>
              Score
            </th>
          </tr>
          <tr>
            <td>
              {this.props.TeamA}
            </td>
            <td>
              <TextField type="number" min="0" value = {this.state.TeamAScore} onChange = {(e)=>this.handleChange(e,'TeamAScore')}/>
            </td>
          </tr>
          <tr>
            <td>
              {this.props.TeamB}
            </td>
            <td>
              <TextField type="number" min="0"  value = {this.state.TeamBScore} onChange = {(e)=>this.handleChange(e,'TeamBScore')}/>
            </td>
          </tr>
          <tr>
            <Button onClick={()=>this.props.GetScores(this.props.TeamA,this.props.TeamB,this.state.TeamAScore,this.state.TeamBScore)}>
              Submit Scores
            </Button>
          </tr>
        </table>
      </div>
    );
  }
}

export default Bracket;

