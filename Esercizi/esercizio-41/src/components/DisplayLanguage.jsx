import React from 'react'
import LanguageContext from './LanguageContext'
import { useContext } from 'react'

function DisplayLanguage() {
    const language = useContext(LanguageContext)
  return (
    <div>
        <h1>Current language: {language} </h1>
    </div>
  )
}

export default DisplayLanguage