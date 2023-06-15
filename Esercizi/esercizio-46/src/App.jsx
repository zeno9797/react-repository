import { Routes } from 'react-router-dom'
import {Route } from 'react-router-dom'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'

function App() {
  
  return (
    <>
      <Routes>
      <Route path='/' element={<Component1/>}/>
      <Route path='/component2' element={<Component2/>}/>
      <Route path='/component3' element={<Component3/>}/>
      </Routes>
     
    </>
  )
}

export default App
