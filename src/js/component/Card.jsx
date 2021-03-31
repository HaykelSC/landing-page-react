import React from "react";

export function Card() {
	const cardNames = [
		"Card Title 1",
		"Card Title 2",
		"Card Title 3",
		"Card Title 4"
	];
	const CardBody = cardNames.map((singleCard, i) => {
		return (
			<div key={i} className="card">
				<img
					src="https://lh3.googleusercontent.com/GsGCYhThLVMYccG1cUe1SG012vgZCQWbsdZf7hlEyZlWSFWf6ClCiM7T6k8e3MMQwoDw=s131"
					className="card-img-top"
				/>
				<div className="card-body">
					<h5 className="card-title">{singleCard}</h5>
					<p className="card-text">
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		);
	});
	return <div className="d-flex flex-row">{CardBody}</div>;
}
