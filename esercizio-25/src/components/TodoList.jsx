import React from "react";

export class TodoList extends React.Component {

    state = {
        arr: this.props.fruits,
        inputValue: ""
    }


    handleOnClick = () => {
        this.setState({
            arr: [...this.props.fruits, this.state.inputValue ],
            inputValue: "" })
            
    }

    handleInput = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleReset = () => {
        this.setState({
            arr: []
        })
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
                <input name="inputFruit" onChange={this.handleInput} type="text" />
                <button onClick={this.handleOnClick}>Add fruits</button>
                <button onClick={this.handleReset} >Reset input text</button>
            </div>
            </>
        )
    }
}