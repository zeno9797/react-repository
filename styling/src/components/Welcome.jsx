import React from "react";


export class Welcome extends React.Component{
    state = {
        username: "",
        password: ""
    }


    dataSetting = (event) => {
        const name = event.target.name 
        const value = event.target.value 
        this.setState({
            [name] : value
        })
    }


    
    render() {
        const divStyle = {
            width: "35%",
            margin: "auto",
            textAlign: "center"
        }


        const submitStyle = {
            backgroundColor: this.state.password.length < 8 ? "red" : "green"
        }

        return (
            <>
            <div style={divStyle}>
                <h1 className="welcome">Hello world!</h1>
                <form onChange={this.dataSetting}>
                <input type="text" name="username" value={this.state.username}/>
                <input type="password" name="password" value={this.state.password} />
                <button style={submitStyle}>Submit</button>
                </form>
            </div>
            </>
        )
    }
}