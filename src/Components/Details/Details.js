import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { withRouter } from 'react-router';

class Details extends Component {

  constructor(props){
    super(props);
    console.log(this.props)
  }

  render() {
    const { input, name, desc, ingredients, img, steps } = this.props;
    return (
      <div className="Details">
        <Paper
          zDepth={2}
          style={{
            height: '100%',
            width: '50%',
            margin: 20,
            textAlign: 'center',
            margin: '0 auto',
          }}>
          <h2
            style={{
              paddingTop: '10px',
              color: '#424242'
            }}>{this.props.name}</h2>
          <h3
            style={{
              color: '#424242'
            }}>{this.props.desc}</h3>
          <img src={this.props.img} style={{height: "auto", width:"50%"}} />
          <h4
          style={{
            paddingTop: '10px',
            color: '#424242'
          }}>Ingredients</h4>
          {this.props.ingredients}
          <h4 style={{
            paddingTop: '10px',
            color: '#424242'
          }}>Steps</h4>
          <p
            style={{
              paddingLeft: '10px',
              paddingRight: '10px'
            }}
          >{this.props.steps}</p>
        </Paper>
      </div>
    );
  }
}
export function mapDispatchToProps(dispatch){
  return {}
}

function mapStateToProps(state) {
  return{
    input: state.recipeReducer.input,
    name: state.recipeReducer.name,
    desc: state.recipeReducer.desc,
    ingredients: state.recipeReducer.ingredients,
    img: state.recipeReducer.img,
    steps: state.recipeReducer.steps
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Details));
