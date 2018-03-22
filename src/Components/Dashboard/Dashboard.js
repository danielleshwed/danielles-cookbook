import React, { Component } from 'react';
import Particles from 'particlesjs';
import './dashboard.css';

import AppBar from 'material-ui/AppBar';
import UserInput from '../UserInput/UserInput'

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    window.onload = function() {
      Particles.init({
        selector: '.background',
        connectParticles: true,
        random: true,
        color: '#ecf0f1',
        speed: 0.6,
      });
    };
  }

  render() {
    return (
      <div className="Dashboard">
        <canvas className="background"></canvas>
        <AppBar
        title="Find Me A Job"
        showMenuIconButton= {false}
        titleStyle = {{color: 'black'}}
        style={{
          backgroundColor: 'white',
        }}
        >
        </AppBar>

        <UserInput />
      </div>

    );
  }
}

export default Dashboard;
