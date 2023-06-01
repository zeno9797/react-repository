import { useState } from 'react'
import { ClickTracker } from './components/ClickTracker'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ClickTracker />
    </>
  )
}

export default App
