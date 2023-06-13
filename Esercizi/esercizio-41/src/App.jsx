import { useState } from "react"
import LanguageContext from "./components/LanguageContext"
import DisplayLanguage from "./components/DisplayLanguage"


function App() {
  const [language, setLanguage] = useState("en")

  function handleOnChage(event) {
    setLanguage(event.target.value)
  }


  return (
    <>
      <select value={language} onChange={handleOnChage}>
        <option value="it">Italiano</option>
        <option value="en">English</option>
      </select>
      <LanguageContext.Provider value={language}>
       <DisplayLanguage/>
      </LanguageContext.Provider>
    </>
  )
}

export default App
