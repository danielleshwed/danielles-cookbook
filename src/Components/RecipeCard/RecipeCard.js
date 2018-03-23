import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

class RecipeCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      expand: false,
      name: this.props.name,
      ingredients: this.props.ingredients,
      steps: this.props.steps
    }

  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default RecipeCard;
