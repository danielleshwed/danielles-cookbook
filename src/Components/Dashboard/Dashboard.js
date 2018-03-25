import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import RecipeCard from '../RecipeCard/RecipeCard';
import { connect } from 'react-redux';

import { updateInput, saveRecipes } from './actions';

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
  }

  componentDidMount(){
    document.body.style = 'background: #00BCD4;'
    this.setState({
      recipes: this.props.recipes
    })
  }


  /**
  When "Find Recipes" button is clicked, add search criteria to state and call GetRecipes()
  to scrape job sites for jobs that match our criteria
  **/
  handleClick(){
    // var jobCriteria = this.state.input.split(";");
    //
    //  this.setState({
    //    criteria: [...this.state.criteria, ...jobCriteria]
    //  })

     this.getRecipes();
  }

  /**
  Make a call to our backend to get collection of recipes based on our keyword
  **/
  getRecipes(){
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
        hintText = "key ingredients"
        onChange = {(e,input) => updateInput(e,input)}
        style={{
          marginTop: '5px',
        }}
        >
        </TextField>

        <RaisedButton
        label="Find Recipes!"
        onClick = {this.handleClick}
        style={{
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
