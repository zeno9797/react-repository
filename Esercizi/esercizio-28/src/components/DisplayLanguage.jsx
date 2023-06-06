import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component {
    

    render() {
        return (
            
            <>
            <LanguageContext.Consumer> 
                { value => {
                    return <h1> {value} </h1>
                }}
            
            </LanguageContext.Consumer>
            </>
            
            
        )
    }
} 