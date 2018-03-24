import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

import { getDetails } from './actions';
import { connect } from 'react-redux';

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

  componentDidUpdate(nextProps) {

    if(this.props.redirect){
      this.props.history.push("/details")
    }
  }

  render() {
    const { getDetails } = this.props;
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
            }}
            style={{
              textAlign: 'left'
            }}/>
          <CardMedia
            expandable={true}
          >
            <img src={this.state.img} style={{height:'50%'}} />
          </CardMedia>
          <CardText
            expandable={true}
            style={{
              textAlign: 'left',
              paddingLeft: '185px'
            }}
            >
            <h3
            style={{
              textAlign: 'left',
              paddingLeft: '80px'
            }}>Ingredients</h3>
            <ul>
              {this.state.ingredients}
            </ul>
          </CardText>
          <CardActions
            expandable={true}>
            <FlatButton
              label="Get Details"
              onClick = {() => getDetails(this.state.name, this.state.desc, this.state.ingredients, this.state.steps, this.state.img)}/>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch){
  return {
    getDetails: (name, desc, ingredients, steps, img) => dispatch(getDetails(name, desc, ingredients, steps, img))
  }
}

function mapStateToProps(state) {
  return{
    input: state.recipeReducer.input,
    redirect: state.recipeReducer.redirect

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RecipeCard);
