import React, { Component } from 'react';
import './App.css';

import Dashboard from '../Dashboard/Dashboard';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Dashboard />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
