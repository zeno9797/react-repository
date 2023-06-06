import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render () {
        return (
            <div>
                {this.props.name === "John"
                ? <h1> hello {this.props.name}</h1>
                : <h1>username not valid</h1>
                }

                {/* {this.props.name === "John" && <h1>hello {this.props.name}</h1>} */}
                
                <Age age="20"/>
                
                
            </div>
        )
    }
}