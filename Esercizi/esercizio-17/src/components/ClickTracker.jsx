import React from "react";

export class ClickTracker extends React.Component {

    state = {
        title: ""
    }

    handleClick = (event) => {
        this.setState({title: event.target.id})
    }

    render() {
        return (
            <>
            <h1>last button clicked: {this.state.title}</h1>
            <button id="First" onClick={this.handleClick}>First</button>
            <button id="Second" onClick={this.handleClick}>Second</button>
            <button id="Third" onClick={this.handleClick}>Third</button></>
        )
    }
}