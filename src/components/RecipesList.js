import React, { Component } from 'react'

// COMPONENTS
import Recipes from './Recipes';
import RecipesSearch from './RecipesSearch';

export default class RecipesList extends Component {
render() {
console.log(this.props.recipes, 'from recipes list');
const { recipes } = this.props;

console.log(recipes, "whats this?");

	return (
		<React.Fragment>
			<RecipesSearch />
				<div className="container my-5">
					<div className="row">
						<div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
								<h1>Recipes List</h1>
						</div>
					</div>
					<div className="row">
						{
							recipes.map( recipe => {
								return(
									<Recipes 
										key={recipe.recipe_id}
										recipe={recipe}
									/>

								);
							})
						}
					</div>
				</div>
		</React.Fragment>
	)
	}
}
