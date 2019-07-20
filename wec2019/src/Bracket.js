import React from 'react';
import './Bracket.css';

function Bracket(props){
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
            {props.TeamA}
          </td>
          <td>
            {props.TeamAScore}
          </td>
        </tr>
        <tr>
          <td>
            {props.TeamB}
          </td>
          <td>
            {props.TeamBScore}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default Bracket;

