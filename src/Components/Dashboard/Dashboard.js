import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import RecipeCard from '../RecipeCard/RecipeCard';

class Dashboard extends Component {

  constructor() {
    super();

    this.state = {
      input: '',
      criteria: [],
      recipes: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
  }

  componentDidMount(){
    document.body.style = 'background: #22192f;'
  }

  /**
  When "Find Recipes" button is clicked, add search criteria to state and call GetRecipes()
  to scrape job sites for jobs that match our criteria
  **/
  handleClick(){
    var jobCriteria = this.state.input.split(";");

     this.setState({
       criteria: [...this.state.criteria, ...jobCriteria]
     })

     this.getRecipes();
  }

  /**
  When text field input is changed, change input state
  **/
  updateInput(e,input){
    this.setState({
      input: input
    })
  }

  /**
  Make a call to our backend to get collection of recipes based on our keyword
  **/
  getRecipes(){
    var url = 'http://localhost:8080/recipes' + "?keyword=" + this.state.input;

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

      })
      .catch(function(error){
        console.log(error);
      });
  }

  render() {
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
        onChange = {this.updateInput}
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

export default Dashboard;
