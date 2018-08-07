import React, { Component } from "react";
import BoardsPage from "./BoardsPage";
import Login from "./Login";
import SignUp from './SignUp';
import Navigation from './Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from "./PageNotFound";


// Main application component
class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			route: "/",
			loggedIn: false
		};
	}

	render() {
		// return this.props.children;
		return (
			<BrowserRouter>
				<div>
					<Navigation />
					<Switch>
						<Route path="/" exact component={Login} />
						<Route path='/boards' component={BoardsPage} />
						<Route path='/signup' component={SignUp} />
						<Route component={PageNotFound} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
export default App;
