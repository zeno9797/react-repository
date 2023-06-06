// function Welcome(prop) {
//     return (
//         <p>
//              ciao {prop.name}!
//         </p>
//     )
// }

// export default Welcome;

import React from "react";

export class Welcome extends React.Component {
    render() {
        return (
            <p>Ciao: {this.props.name}</p>
        )
    }
}

