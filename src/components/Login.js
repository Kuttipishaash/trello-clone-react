import React, { Component } from 'react'
import { loginUser } from '../firebase/firebase-auth';

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
        }
    }

    inputValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        console.log(email)
        loginUser(email, password);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="email">
                        Email :
                        <input type="text" name="email" value={this.state.email} onChange={this.inputValueChange} />
                    </label>
                    <label htmlFor="password">
                        Password :
                        <input type="password" name="password" value={this.state.password} onChange={this.inputValueChange} />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
