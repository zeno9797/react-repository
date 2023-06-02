import React from "react";

export class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }


    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleLogin = () => {
        console.log(this.state)
    }
   

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" type="text" placeholder="username" onChange={this.handleInputChange} />
                    <input name="password" type="password" placeholder="password" onChange={this.handleInputChange} />
                    <button onClick={this.handleLogin}  disabled={!this.state.username || !this.state.password}>Login</button>   
                </form>
            </div>
        )
    }
}