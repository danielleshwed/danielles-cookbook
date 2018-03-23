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
      steps: this.props.steps,
      img: this.props.image
    }

  }
  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title={this.state.name}
            actAsExpander={true}
            showExpandableButton={true} />
          <CardMedia
            expandable={true}
          >
            <img src={this.state.img} style={{width: '50%', height:'50%'}} />
          </CardMedia>
          <CardText expandable={true}>
          <ul>
            {this.state.ingredients}
          </ul>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default RecipeCard;
