import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {

    state = {
        text: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({text: event.target[0].value})
    }

    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
            <input type="text" />
            <br />
            <button type="submit">Submit</button>
            </form>
            <Welcome name={this.state.text}/>
            </>
        )
    }
}