import React from "react";
import {Navbar} from "./navbar.jsx"
import { Jumbotron } from "./jumbotron.jsx";
import { Cards } from "./cards.jsx";
import { Footer } from "./footer.jsx";
import css from "/workspace/react-hello/src/styles/index.css"
//create your first component
const Home = () => {
	return (
		<div className="text-center vh-100">
			<Navbar />
			<Jumbotron />
			<div id="cards" className="container p-0">
				<div className="row d-flex flex-column align-items-center flex-md-row">
					<Cards />
					<Cards />
					<Cards />
					<Cards />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
