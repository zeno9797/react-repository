import React from "react";

export class TodoList extends React.Component {

    state = {
        arr: this.props.fruits,
        inputValue: ""
    }

    handleInput = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleOnClick = () => {
        this.setState({
            arr: [...this.state.arr, this.state.inputValue ],
            inputValue: "" })
    }

    render() {
        return (
            <>
            <div>
                <ul>
                    {this.state.arr.map((element, index) => {
                      return <li key={index}>{element}</li>
                    })}
                </ul>
                <input onChange={this.handleInput} type="text" value={this.state.inputValue}/>
                <button onClick={this.handleOnClick}>Add fruits</button>
            </div>
            </>
        )
    }
}