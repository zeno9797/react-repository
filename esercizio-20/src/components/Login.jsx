import React from "react";

export class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }


    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleLoginReset = () => {
        this.setState({
            username: "",
            password: ""

        })
    }

    handleLogin = () => {
        console.log(this.state.username)
        console.log(this.state.password)
    }


    render() {
        return (
                <div>
                    <input name="username" type="text" placeholder="username" onChange={this.handleInputChange} value={this.state.username} />
                    <input name="password" type="password" placeholder="password" onChange={this.handleInputChange} value={this.state.password} />
                    <button onClick={this.handleLogin} disabled={!this.state.username || !this.state.password}>Login</button>
                    <button onClick={this.handleLoginReset}>Reset</button>
                </div>
        )
    }
}