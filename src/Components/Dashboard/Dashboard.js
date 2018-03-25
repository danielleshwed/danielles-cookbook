import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import RecipeCard from '../RecipeCard/RecipeCard';
import { connect } from 'react-redux';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import { updateInput, saveRecipes } from './actions';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';

import Paper from 'material-ui/Paper';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      criteria: [],
      recipes: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
    this.rerouteToAddRecipe = this.rerouteToAddRecipe.bind(this);
  }

  /**
  When hitting back button to dashboard page, get recipes from props
  **/
  componentDidMount() {
    document.body.style = 'background: #00BCD4;'
    this.setState({
      recipes: this.props.recipes
    })
  }

  /**
  When add recipe button is clicked, route to /addRecipe page
  **/
  rerouteToAddRecipe() {
    this.props.history.push('/addRecipe');
  }

  /**
  When "Find Recipes" button is clicked, add search criteria to state and call GetRecipes()
  to pull recipes from backend
  **/
  handleClick() {
     this.getRecipes();
  }

  /**
  Make a call to our backend to get collection of recipes based on our keyword
  **/
  getRecipes() {
    const { input, saveRecipes } = this.props;
    var url = 'http://localhost:8080/recipes' + "?keyword=" + this.props.input;
    fetch(url)
      .then(data => {
        return data.json();
      }).then(results => {
        this.setState({
          recipes: ''
        })
        let recipes = results.map((recipe) => {

          var name = recipe.name;
          var steps = recipe.steps;
          var image = recipe.imageurl;
          var descr = recipe.description;

          let ingredients = recipe.ingredients.map((item) => {
            return (
              <ul> {item.quantity + " " + item.name} </ul>
            )
          })

          return(
            <RecipeCard name={name} ingredients={ingredients} steps={steps} image={image} description={descr}/>
          )
        })

        if(recipes.length == 0){
          recipes = <Paper
            zDepth={2}
            style={{
              height: '100%',
              width: '50%',
              margin: 20,
              textAlign: 'center',
              paddingTop: '20px',
              paddingBottom: '20px',
              margin: '0 auto',
          }}> No Recipes to Display</Paper>
        }

        this.setState({
          recipes: recipes
        })

        saveRecipes(recipes);

      })
      .catch(function(error){
        console.log(error);
      });
  }

  render() {
    const { updateInput } = this.props;
    return (
      <div className="Dashboard">
        <AppBar
        title="Find Me a Recipe"
        showMenuIconButton= {false}
        titleStyle = {{
          color: 'black',
          textAlign: 'left'
        }}
        style={{
          backgroundColor: 'white',
        }}
        >
        <TextField
        multiLine = {false}
        hintText = "key ingredient"
        onChange = {(e,input) => updateInput(e,input)}
        style={{
          marginTop: '5px',
        }}
        >
        </TextField>

        <RaisedButton
        label="Find Recipes"
        backgroundColor = '#00BCD4'
        labelStyle = {{color: 'white'}}
        onClick = {this.handleClick}
        style={{
          marginTop: '8px',
          marginBottom: '20px'
        }} />
        <RaisedButton
        label="Add a Recipe"
        onClick = {this.rerouteToAddRecipe}
        style={{
          marginLeft: '10px',
          marginTop: '8px',
          marginBottom: '20px'
        }} />
        </AppBar>
        <div>
          {this.state.recipes}
        </div>
      </div>

    );
  }
}

export function mapDispatchToProps(dispatch){
  return {
    updateInput: (e,input) => dispatch(updateInput(e,input)),
    saveRecipes: (recipes) => dispatch(saveRecipes(recipes))
  }
}

function mapStateToProps(state) {
  return{
    input: state.dashboardReducer.input,
    recipes: state.dashboardReducer.recipes
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
