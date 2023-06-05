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
                </div>
                <hr style={hrStyle}/>
                <div>
                    {this.props.children}
                </div>

            </div>
        )
    }
}