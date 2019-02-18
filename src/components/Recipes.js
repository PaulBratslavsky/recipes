import React, { Component } from 'react'

export default class Recipes extends Component {
    render() {
		const { 
			image_url,
			title,
			source_url,
			publisher,
			recipe_id
		 } = this.props.recipe;

		 const { handelDetailsId } = this.props;
    return (
        <React.Fragment>
					<div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
						<div className="card">
							<img 
								className="img-card-top" 
								style={{height: "14rem"}} 
								src={image_url} 
								alt={title} 
							/>
							<div className="card-body text-capitalize">
								<h6>{title}</h6>
								<p className="warning">Provided by {publisher}</p>
							</div>
							<div className="card-footer">
								<button 
									type="button"
									className="btn btn-primary text-capitalize"
									onClick={() => handelDetailsId(0, recipe_id)}>
										Details
								</button>
								<a 
									href={source_url} 
									className="btn btn-success text-capitalize mx-2"
									target="_blank"
									rel="noopener noreferrer"
									>Recipe Url
								</a>
							</div>
						</div>
					</div>
				</React.Fragment>
    )
    }
}
