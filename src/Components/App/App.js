import React, { Component } from 'react';
import './App.css';

import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Router history={browserHistory}>
            <Route path='/' component={Home} />
            <Route path='/home' component={Dashboard} />
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
