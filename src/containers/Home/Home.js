import React, { Component } from 'react';
import ListaPosts from '../../components/ListaPosts/ListaPosts.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Home extends Component {
	render() {
		return (
			<Router>
				<div className="wrapper">
					<h1>Home</h1>
					<ul>
						<li><a href='/post/10-projetos-para-fazer-com-arduino'>Abrir Post</a></li>
					</ul>
				</div>
			</Router>
		);
	}
}

export default Home;
