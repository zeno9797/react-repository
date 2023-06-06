import React from "react"
import { LanguageContext } from "./components/LanguageContext";
import { DisplayLanguage } from "./components/DisplayLanguage ";

export class App extends React.Component {
  state = {
    language: 'en'
  }

  handleLanguageChange = (event) => {
    this.setState({ language: event.target.value })
  }
  render() {
    return (
      <div>
        <select onChange={this.handleLanguageChange} value={this.state.language}>
          <option value="en">ENGLISH</option>
          <option value="it">ITALIANO</option>
        </select>
        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    )
  }
}

export default App;


