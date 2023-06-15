import React from 'react'
import {useNavigate} from 'react-router-dom'


function Component1() {
    const navigate = useNavigate()

    const style = {
        background: "blue",
    }

    function handleGoToC2(){
        navigate('/component2')
    }

    function handleGoToC3(){
        navigate('/component3')
    }


  return (
    <div>
        <h1 style={style}>questo è il componente UNO - 1</h1>
        <button onClick={handleGoToC2}>vai al componente 2</button>
        <br /> <br />
        <button onClick={handleGoToC3}>vai al componente 3</button>
    </div>
  )
}

export default Component1