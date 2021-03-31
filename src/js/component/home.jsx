import React from "react";
import { Navbar } from "./Navbar.jsx";
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Footer } from "./Footer.jsx";
//create your first component
export function Home() {
	return (
		<div className="container-fluid mb-3">
			<Navbar />
			<Jumbotron />
			<Card />
			<Footer />
		</div>
	);
}
