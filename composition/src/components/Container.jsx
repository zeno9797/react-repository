import React from "react";


export class Container extends React.Component {
    render() {

        const hrStyle = {
            width: "80%"
        }

        return (
            <div className="container">
                <div>
                    {this.props.title}
                    <p>ciao ciao</p>
                </div>

                <hr style={hrStyle}/>

                <div>
                <h1>Ciao ciao</h1>
                    {this.props.children}
                </div>

            </div>
        )
    }
}