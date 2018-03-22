import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class UserInput extends Component {

  constructor(){
    super();

    this.state = {
      input: '',
      criteria: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  handleClick(){
    var jobCriteria = this.state.input.split(";");

     this.setState({
       criteria: [...this.state.criteria, ...jobCriteria]
     })
  }

  updateInput(e,input){
    this.setState({
      input: input
    })
  }

  render() {
    return (
      <div className="App">
        <TextField
        multiLine = {false}
        hintText = "  job criteria seperated by ;"
        underlineStyle= {{color: 'indigo900'}}
        onChange = {this.updateInput}
        style={{
          marginTop: '20px',
          background: 'white'
        }}
        >
        </TextField>
        <div>
          <RaisedButton
          label="Find Jobs!"
          onClick = {this.handleClick}
          style={{
            marginTop: '10px'
          }} />
        </div>
      </div>
    );
  }
}

export default UserInput;
