import React, { Component } from 'react';
import './App.css';

// DATA
import { recipes } from './data/tempList';

// COMPONENTS
import RecipesList from './components/RecipesList';
import ReciepesDetails from './components/RecipesDetails';

class App extends Component {
  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=41fb4fc4a0a5b6b7d524c164912db455",
    details_id: 35389,
    pageIndex: 0
  }
  /*
  async getRecipesFromApi() {
    try {
      const data = await fetch(this.state.url);
    const jsonData = await data.json();

    this.setState({
      recipes: jsonData.recipes
    });
    } catch(error) {
      console.log(error, 'Failed in loading Json ');
    }
  }

  componentDidMount() {
    this.getRecipesFromApi();
  }
  */

  showDetailsFullPage = (index) => {
      switch (index) {
        default:
        case 1: 
          return(<RecipesList recipes={this.state.recipes} />);
        case 0:
          return(<ReciepesDetails id={this.state.details_id}/>);
      }
  }

  render() {
    console.log(this.state.recipes, "from app js");
    return (
      <React.Fragment>
        {this.showDetailsFullPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}

export default App;
