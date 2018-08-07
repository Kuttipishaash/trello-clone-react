import React, { Component } from 'react'
import { registerUser } from '../firebase/firebase-auth';

export default class SignUp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
		}
	}
	inputValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit = (e) => {
		e.preventDefault();
		const user = this.state
		registerUser(user);
	}
	render() {
		return (
			<div>
				<h1>Sign Up</h1>
				<form onSubmit={this.onSubmit}>
					<input type="text" name="firstName" value={this.state.firstName} onChange={this.inputValueChange} />
					<input type="text" name="lastName" value={this.state.lastName} onChange={this.inputValueChange} />
					<input type="text" name="email" value={this.state.email} onChange={this.inputValueChange} />
					<input type="text" name="password" value={this.state.password} onChange={this.inputValueChange} />
					<button type="submit">Register</button>
				</form>
			</div>
		)
	}
}
