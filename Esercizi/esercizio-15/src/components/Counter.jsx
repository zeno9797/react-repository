import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
  state = {
    count: this.props.initialValue
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementBy
        };
      });
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}

Counter.defaultProps = {
  initialValue: 0,
  interval: 1000,
  incrementBy: 1
};