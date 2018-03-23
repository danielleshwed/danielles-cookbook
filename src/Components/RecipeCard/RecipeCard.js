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
      img: this.props.image,
      desc: this.props.description
    }
  }

  render() {
    return (
      <div>
        <Card
        style={{
            width: '50%',
            margin: '0 auto',
            paddingBottom: '10px',
            paddingTop: '10px',
            marginTop: '10px',
          }}>
          <CardHeader
            title={this.state.name}
            subtitle={this.state.desc}
            avatar={this.state.img}
            actAsExpander={true}
            showExpandableButton={true}
            titleStyle={{
              textAlign: 'left'
            }}
            subtitleStyle={{
              textAlign: 'left'
            }} />
          <CardMedia
            expandable={true}
          >
            <img src={this.state.img} style={{height:'50%'}} />
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
