import React from "react";

export const Navbar = props => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			{" "}
			<div
				className="collapse navbar-collapse d-flex justify-content-between"
				id="navbarText">
				<div>
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				<div className="d-flex flex-row">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Services
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
