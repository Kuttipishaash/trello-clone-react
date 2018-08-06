import React, { Component } from 'react'
import { registerUser } from '../firebase/firebase-auth';

export default class UserRegistration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log("Submit")
        console.log(this.state);
        const email = this.state.email;
        const password = this.state.password;
        if(registerUser(email, password)){
            console.log("TODO Code here");
            
        }
    }
    inputValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="username">
                        User Name :
                        <input type="text" name="username" value={this.state.username} onChange={this.inputValueChange}/>
                    </label>
                    <label htmlFor="email">
                        Email :
                        <input type="email" name="email" value={this.state.email} onChange={this.inputValueChange}/>
                    </label>
                    <label htmlFor="password">
                        Password :
                        <input type="password" name="password" value={this.state.password} onChange={this.inputValueChange}/>
                    </label>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}
