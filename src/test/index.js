import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';


import APP from './App';
import Example from './Example';
import Home from './Home';



render(
  <Router history={hashHistory}>
    <Route path="/" component={APP}>
      <Route path="home" component={Home}>
        <Route path="example" component={Example}></Route>
      </Route>
    </Route>
  </Router>
, document.getElementById('app'))