import React, { Component } from 'react'

// COMPONENTS
import Recipes from './Recipes';
import RecipesSearch from './RecipesSearch';

export default class RecipesList extends Component {
render() {
const { recipes } = this.props;

	const { handleSearchSubmitButton, handleSearchInputChange, value  } = this.props;
	return (
		<React.Fragment>
			<RecipesSearch 
				handleSearchSubmitButton={handleSearchSubmitButton}
				handleSearchInputChange={handleSearchInputChange}
				value={value}
			/>
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
										handelDetailsId={this.props.handelDetailsId}
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
