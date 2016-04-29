import React from 'react';
import {Link} from 'react-router';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(() => {})

export default class App extends React.Component{
  constructor(props){
    super();
    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  render(){
    console.debug('APP render')
    return (
      <Provider store={store}>
        <div>
          <div>
            <Link to="/">back app</Link>
            <Link to="/home">go home</Link>
            <Link to="/home/example">go to example</Link>
            <div>count: {this.state.count}</div>
          </div>
          <div>
            {this.props.children || 'app'}
          </div>
        </div>
      </Provider>
    )
  }
}