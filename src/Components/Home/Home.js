import React, { Component } from 'react';
import Particles from 'particlesjs';
import './home.css';

import { Card, CardActions, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  /**
  When Get Started is Clicked, go to main page of Cookbook
  **/
  handleClick(){
    this.props.history.push("/home");
  }

  /**
  Configure particles background
  **/
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
      <div className="Home">
        <canvas className="background"></canvas>
        <Card
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          margin: 'auto',
          width: '250px',
          height: '150px',
          paddingTop: '10px'
        }}
        >
          <CardTitle
            title="Danielle's Cookbook"/>
          <CardActions>
            <RaisedButton
            label="Get Started"
            style={{
              backgroundColor: '#22192f',
              display: 'flex',
              justifyContent: 'center'
            }}
            onClick={this.handleClick}/>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Home;
