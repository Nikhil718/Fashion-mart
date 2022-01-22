import React from "react";

import FormInput from "../form input/form input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../firebase/firebase-util";
import './sign in.style.scss'

class Signin extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        };
    }

    handelSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' })
    };

    handelChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="sign-in">
                <h2 >I already have an account</h2>
                <span className="title">Signin using your email and password </span>

                <form onSubmit={this.handelSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handelChange} label="Email" required />
                    
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handelChange} label ="Password" required />
                    
                    <CustomButton type="submit"> Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle}> {' '} Sign in with google {' '}</CustomButton>
                </form>

            </div>
        );
    }

}
export default Signin;