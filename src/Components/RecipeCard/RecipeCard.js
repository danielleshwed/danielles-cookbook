import React, { Component } from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

import { getDetails, redirectBrowser } from './actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

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

  componentDidMount() {
    if(this.props.redirect){
      this.props.history.push("/details")
    }
  }

  componentWillReceiveProps(nextProps) {
      if(nextProps.redirect){
        nextProps.history.push("/details")
      }
      this.props.redirectBrowser();
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
            fontFamily: "Roboto"
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
            <img alt='' src={this.state.img} style={{height:'50%'}} />
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
            <RaisedButton
              label="Get Details"
              onClick = {() => getDetails(this.state.name, this.state.desc, this.state.ingredients, this.state.steps, this.state.img)}
              backgroundColor = '#00BCD4'
              labelStyle = {{color: 'white'}}
              style={{
                margin: '0 auto',
                display: 'flex',
                width: '20%'
              }}/>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    getDetails: (name, desc, ingredients, steps, img) => dispatch(getDetails(name, desc, ingredients, steps, img)),
    redirectBrowser: () => dispatch(redirectBrowser())
  }
}

function mapStateToProps(state) {
  return{
    input: state.recipeReducer.input,
    redirect: state.recipeReducer.redirect

  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RecipeCard));
