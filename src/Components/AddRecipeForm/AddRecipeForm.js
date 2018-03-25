import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { withRouter } from 'react-router';

class AddRecipeForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: '',
      description: '',
      quantity: '',
      ingredientName: '',
      steps: '',
      imageurl: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
  }

  /**
  Save form data to state on text field change
  **/
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  }

  /**
  On click of "add" button, POST request to backend to append recipe to
  recipes.json then route to home
  **/
  addRecipe() {
    var recipe = { name: this.state.name,
                   description: this.state.description,
                   ingredients: [{ quantity: this.state.quantity, name: this.state.ingredientName }],
                   steps: [this.state.steps],
                   imageurl: this.state.imageurl };

    fetch('http://localhost:8080/addRecipe', {
      method: 'POST',
      body: JSON.stringify(recipe),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(function(response){
      return response.json()
    }).then(function(data){
      console.log(data);
    })

    this.props.history.push('/home');
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
            <form>
              <h2
                style={{
                  paddingTop: '20px'
                }}
                > Add a Recipe </h2>
              <TextField
                floatingLabelText="Recipe Name"
                hintText="Braised Short Ribs"
                label="name"
                onChange = {this.handleChange("name")}
              /><br />
              <TextField
                floatingLabelText="Description"
                hintText="Slow Cooked with Potato Puree"
                label="description"
                onChange = {this.handleChange("description")}
              /><br />
              <TextField
                floatingLabelText="Ingredient Quantity"
                hintText="1kg"
                label="quantity"
                onChange = {this.handleChange("quantity")}
              /><br />
              <TextField
                floatingLabelText="Ingredient Name"
                hintText="Short Ribs"
                label="ingredientName"
                onChange = {this.handleChange("ingredientName")}
              /><br />
              <h3>Steps</h3>
              <TextField
                hintText="Steps seperated by ;"
                multiLine={true}
                label="steps"
                onChange = {this.handleChange("steps")}
              /><br />
              <TextField
                floatingLabelText="Image URL"
                hintText="http://myimage.com"
                label="imageurl"
                onChange = {this.handleChange("imageurl")}
              /><br />
              <RaisedButton
                label="Add"
                backgroundColor = '#00BCD4'
                labelStyle = {{color: 'white'}}
                onClick = {this.addRecipe}
                style={{
                  margin: '0 auto',
                  display: 'flex',
                  width: '20%',
                  marginTop: '20px',
                  marginBottom: '20px'
                }}/>
            </form>
        </Paper>
      </div>
    );
  }

}

export default withRouter(AddRecipeForm);
