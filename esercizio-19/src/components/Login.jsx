import React from "react";

export class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }


    handleInputChange = (event) => {

        const name = event.target.name
        const value = event.target.value

        this.setState({
            [name]: value
        });
    }


    handleLogin = (event) => {

        event.preventDefault()
        
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value

        console.log(
            username,
            password
        )
    }



    render() {
        return (
                <form onSubmit={this.handleLogin}>
                    <input name="username" type="text" placeholder="username" onChange={this.handleInputChange} value={this.state.username} />
                    <input name="password" type="password" placeholder="password" onChange={this.handleInputChange} value={this.state.password} />
                    <button disabled={!this.state.username || !this.state.password}>Login</button>
                </form>
        )
    }
}