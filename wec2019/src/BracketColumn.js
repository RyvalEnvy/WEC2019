import React from 'react';
import Bracket from './Bracket';

function BracketColumn(props){
  let items = [];
  for (let i=0;i<props.numberOfMatches;i++){
    items.push(
      <Bracket
          TeamA = ''
          TeamB = ''
          TeamAScore='-'
          TeamBScore='-'
        />
      )
  }
  return(
    <div>
      {items}
    </div>
  );
}

export default BracketColumn;
