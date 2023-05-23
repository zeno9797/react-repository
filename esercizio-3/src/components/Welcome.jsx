import React from "react";

export class Welcome extends React.Component {
    static defaultProps = {
        name: "User"
    }


    render() {
        return (
            <h1>hello {this.props.name}</h1>
        )
    }
}