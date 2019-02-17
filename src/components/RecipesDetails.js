import React, { Component } from 'react'
import { recipe } from '../data/tempDetails';

export default class RecipesDetails extends Component {
	constructor(props) {
			super(props);

			this.state = {
					recipe: recipe,
					url: `https://www.food2fork.com/api/get?key=41fb4fc4a0a5b6b7d524c164912db455&rId=${this.props.id}`,
			}
	}

  async componentDidMount() {
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

	render() {
		console.log(this.state.recipe, "from details");
		const {
				image_url,
				publisher,
				publisher_url,
				source_url,
				title,
				ingredients
		} = this.state.recipe;

	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto col-md-6 my-3">
						<button type="button" className="btn btn-warning mb-5 text-capitalize">
								Back to Recipe List
						</button>
						<img src={image_url} alt={title} className="d-block w-100"/> 
					</div>
					<div className="col-10 mx-auto col-md-6 my-3">
						<h6 className="text-uppercase">{title}</h6>
						<h6 className="text-warning text-capitalize">Provided by {publisher}</h6>
						<a 
								href={publisher_url} 
								targrt="_blank" 
								rel="noopener noreferrer"
								className="btn btn-primary mt-2 text-capitalize"
								> Publisher Webpage
						</a>
						<a 
								href={source_url} 
								targrt="_blank" 
								rel="noopener noreferrer"
								className="btn btn-success mt-2 mx-3 text-capitalize"
								> Recipe Url
						</a>

						<ul className="list-group mt-4">
								<h2 className="mt-3 mb-4">Ingredients</h2>
								{
										ingredients.map( (item, index) => {
											return(
												<li key={index} className="list-group-item">
													{item}
												</li>
											);
										})
								}
						</ul>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
	}
}
