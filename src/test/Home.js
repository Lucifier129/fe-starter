import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component{
  constructor(props){
    super()
  }

  componentWillReceiveProps(){
    console.debug('home receive new prop')
  }

  render(){
    console.debug('Home rendering');
    return (
      <div>
        this is Home Componnet
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}