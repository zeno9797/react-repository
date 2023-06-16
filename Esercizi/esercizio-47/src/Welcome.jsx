import React from 'react'
import { useParams } from 'react-router-dom'

function Welcome() {
    const {name} = useParams()

  return (
    <div>Ciao, {name}</div>
  )
}

export default Welcome