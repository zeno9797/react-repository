import React from "react";

export class ClickCounter extends React.Component {

    state = {
        count: 0
    }

    increment = () => {
        this.setState({ count: this.state.count+ 1 })
    }


    render() {

       
        return (
            <>
            <h1>Count: {this.state.count} </h1>
            <button onClick={this.increment}>Increment</button>
            </>
        )
    }
}