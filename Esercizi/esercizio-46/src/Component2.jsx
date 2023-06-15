import React from 'react'
import {useNavigate} from 'react-router-dom'

function Component2() {

    const style = {
        background: "red",
    }

   const navigate = useNavigate()

   function handleGoToC1(){
    navigate('/')
   }

   function handleGoToC3(){
    navigate('/component3')
   }

  return (
    <div>

        <h1 style={style}>questo è il componente DUE - 2</h1>
        <button onClick={handleGoToC1}>vai al componente 1</button>
        <br /> <br />
        <button onClick={handleGoToC3}>vai al componente 3</button>
    </div>
  )
}

export default Component2