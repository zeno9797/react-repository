import Welcome  from "./components/Welcome.jsx"
import Sum from "./components/Sum.jsx"

function App() {


  return (
    <>
     <Welcome />
     <Sum numbers={[1, 2, 3, 4, 5]} />
    </>
  )
}

export default App
