import React, { Component } from 'react'
import { signup } from '../auth'
import { Link } from 'react-router-dom'
import DefaultProfile from "../images/garageguide-logo.jpg"

class SignUp extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            error: "",
            open: false
        }
    }

    handleChange = (name) => (event) => {
        this.setState({ error: "" })
        this.setState({[ name ]: event.target.value });
    };

    clickSubmit = event => {
        event.preventDefault()
        const { name, email, password } = this.state;
        const user = {
            name,
            email,
            password
        };
        // console.log(user);
        signup(user).then(data => {
            if(data.error) this.setState({ error: data.error });
                else 
                  this.setState({
                    error: "",
                    name: "",
                    email: "",
                    password: "",
                    open: true
                });
        });
    };

    signupForm = (name, email, password) => (
        <form>
            <div className = "form-group">
            <div className = 'logo' style={{marginBottom: '20px'}}>
            <img style={{height: "200px", width: "auto"}}
                    className="img-thumbnail"
                    src={`${DefaultProfile}`}
                    onError={ i => (i.target.src = `${DefaultProfile}`)} 
                    alt="Garage Guide logo" />
            </div>    
                <label className="text-muted"> Name </label>
                    <input onChange = { this.handleChange("name") } 
                           type = "text" 
                           className = "form-control"
                           value = { name } 
                    />
            </div>

            <div className = "form-group">
                    <label className="text-muted"> Email </label>
                        <input onChange = { this.handleChange("email") } 
                               type = "email" 
                               className = "form-control"
                               value = { email }
                        />
            </div>

            <div className = "form-group">
                    <label className="text-muted"> Password </label>
                        <input onChange = { this.handleChange("password") } 
                               type = "password" 
                               className = "form-control" 
                               value = { password }
                        />
            </div>

                    <button onClick = { this.clickSubmit } 
                            className = "btn btn-raised btn-primary">
                            Submit
                    </button>
                </form>
    )

    render() {
        const { name, email, password, error, open } = this.state;
        return (
            <div className = "container">
                <h2 className = "mt-5 mb-5">Signup Page</h2>

                <div className = "alert alert-danger" 
                     style = {{ display: error ? "" : "none" }}>
                    { error }
                </div>

                <div className = "alert alert-info" 
                     style = {{ display: open ? "" : "none" }}>
                    Welcome to your Garage Guide account! Please <Link to="/signin">sign in</Link> 
                </div>

                {this.signupForm(name, email, password)}
            </div>
        );
    }
}

export default SignUp;