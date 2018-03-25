import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddRecipeForm extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Paper
          zDepth={2}
          style={{
            height: '100%',
            width: '50%',
            margin: 20,
            textAlign: 'center',
            margin: '0 auto'
          }}>
          <h2>Add Recipe</h2>
            <TextField
              hintText="Recipe Name"
            /><br />
            <TextField
              hintText="Description"
            /><br />
          <h3>Ingredients</h3>
            <TextField
              hintText="Quantity"
            /><br />
            <TextField
              hintText="Ingredient Name"
            /><br />
        </Paper>
      </div>
    );
  }

}

export default AddRecipeForm;
