import React from "react";

export class Welcome extends React.Component {
    static defaultProps = {
        name: "User"
    }


    render() {
        return (
            <div>
            <h1>hello {this.props.name}</h1>
            <p>you age is {this.props.age} </p>
            </div>
        )
    }
}