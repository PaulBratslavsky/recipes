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
    base_url: "https://www.food2fork.com/api/search?key=41fb4fc4a0a5b6b7d524c164912db455",
    details_id: 35389,
    pageIndex: 1,
    search: "",
    query: "&q=",
    error: ''
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
          return(<RecipesList 
            recipes={this.state.recipes} 
            handelDetailsId={this.handelDetailsId} 
            value={this.state.search}
            handleSearchInputChange={this.handleSearchInputChange}
            handleSearchSubmitButton={this.handleSearchSubmitButton}
          />);
        case 0:
          return(<ReciepesDetails id={this.state.details_id} handleIndexChange={this.handleIndexChange}/>);
      }
  }

  handleIndexChange = (index) => {
    this.setState({
      pageIndex: index
    });
  }

  handelDetailsId = (index, id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  }

  handleSearchInputChange = (e) => {
    this.setState({
      search: e.target.value
    }, () => {console.log(this.state.search)});
  }

  handleSearchSubmitButton = (e) => {
    e.preventDefault();
    console.log('submit button clicked');
    const { base_url, query, search } = this.state;

    this.setState(
      () => {
        return {
          url: `${base_url}${query}${search}`,
          search: ""
        }
      }, () => {  this.getRecipesFromApi(); }
    );
  }
  render() {
    return (
      <React.Fragment>
        {this.showDetailsFullPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}

export default App;
