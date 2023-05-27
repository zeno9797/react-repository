import React from "react";



export class Counter extends React.Component {

    state = {
        count: this.props.initialValue

    }

constructor(props) {
    super(props)
    setInterval(() => {
        this.setState((state) => {
            return {
                count: state.count + this.props.incrementBy
            }
        })
    }, this.props.interval);
}

    render() {

        return(
            <div>
            <h1>Count: {this.state.count} </h1>
            </div>
        )
    }
}


Counter.defaultProps = {
    initialValue: 0,
    interval: 1000,
    incrementBy: 1
}