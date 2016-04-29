import React from 'react';
import {Link} from 'react-router';

export default class Example extends React.Component{
  constructor(props){
    super()
  }

  componentWillReceiveProps(){
    console.debug('example receive new prop')
  }

  render(){
    console.debug('Example rendering');
    return (
      <div>
        this is Example Componnet
      </div>
    )
  }
}