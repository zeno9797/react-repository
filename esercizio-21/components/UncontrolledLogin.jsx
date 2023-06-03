import React, { createRef } from "react"

export class UncontrolledLogin extends React.Component {
    _formRef = createRef() 

    handleFormSubmit = (event) => {
        event.preventDefault()
        const username = this._formRef.current.elements.username.value 
        const password = this._formRef.current.elements.password.value 

        console.log(
            username,
            password
        )
    }

    handleFormReset = () => {
        this._formRef.current.elements.username.value = "",
        this._formRef.current.elements.password.value = ""
    }



    render() {
        return (
            <>
            <h1>Esercizio 21</h1>

            <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                <input name="username"/>
                <input name="password" type="password"/>
                <button type="submit">Login</button>
                <button onClick={this.handleFormReset}>Reset</button>
            </form>
            </>
        )
    }
}