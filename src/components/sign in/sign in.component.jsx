import React from "react";

import './sign in.style.scss'

class Signin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: ' ',
            password: ' '
        }
    }

    HandelSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    }

    HandelChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Signin using your email and password </span>

                <form onSubmit={this.HandelSubmit}>
                    <input name="email" type="email" value={this.state.email} onChange={this.HandelChange} required />
                    <label>Email</label>
                    <input name="password" type="password" value={this.state.password} onChange={this.HandelChange} required />
                    <label>Password</label>
                    <input type="submit" value="Submit Form" />
                </form>

            </div>
        )
    }

}
export default Signin;