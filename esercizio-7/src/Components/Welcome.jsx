import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render () {
        return (
            <div>
                <h1>Ciao {this.props.name}</h1>
                <Age age="20"/>
                
                
            </div>
        )
    }
}