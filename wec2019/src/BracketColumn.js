import React from 'react';
import 'Bracket' from './Bracket';

function BracketColumn(props){
  return(
    {
      for(i=0;i<props.numberOfMatches ;i++){
        <Bracket
          TeamA = ''
          TeamB = ''
          TeamAScore='-'
          TeamBScore='-'
        />
      }
    }
  );
}
