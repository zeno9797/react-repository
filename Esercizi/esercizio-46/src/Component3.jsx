import React from 'react'
import {useNavigate} from 'react-router-dom'


function Component1() {
    const navigate = useNavigate()

    const style = {
        background: "green",
    }

    function handleGoToC1(){
        navigate('/')
    }

    function handleGoToC2(){
        navigate('/component2')
    }


  return (
    <div>
        <h1 style={style}>questo è il componente TRE - 3</h1>
        <button onClick={handleGoToC1}>vai al componente 1</button>
        <br /> <br />
        <button onClick={handleGoToC2}>vai al componente 2</button>
    </div>
  )
}

export default Component1