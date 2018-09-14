import React, { Component } from 'react';
import ListaPosts from '../../components/ListaPosts/ListaPosts.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Home extends Component {
	render() {
		return (
			<Router>
				<ListaPosts />
			</Router>
		);
	}
}

export default Home;
