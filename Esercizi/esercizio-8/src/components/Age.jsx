import React from "react";

export class Age extends React.Component {
    render () {
        return (
            <div>
                {/* {this.props.age 
                ? <p> your age is {this.props.age}</p>
                : <p> enter your age</p>
                } */}

                { this.props.age && <p>your age is {this.props.age} </p>}
            </div>
        )
    }
}