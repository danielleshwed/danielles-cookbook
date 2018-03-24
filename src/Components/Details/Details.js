import React, { Component } from 'react';
import { connect } from 'react-redux';

class Details extends Component {

  constructor(props){
    super(props);
    console.log(this.props)
  }

  render() {
    const { input, name, desc, ingredients, img, steps } = this.props;
    return (
      <div className="Details"
      style={{
        color: 'white'
      }}>
        <h1>{this.props.name}</h1>
        <h3>{this.props.desc}</h3>
        <img src={this.props.img} />
        <p>{this.props.ingredients}</p>
        <p>{this.props.steps}</p>
      </div>
    );
  }
}
export function mapDispatchToProps(dispatch){
  return {

  }
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

export default connect(mapStateToProps,mapDispatchToProps)(Details);
