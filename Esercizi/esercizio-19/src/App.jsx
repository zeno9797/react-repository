import { Login } from "./components/Login"


function App() {
  
  function onLogin(username, password) {
    console.log(username, password)
  }

  return (
    <>
      <Login onLogin={onLogin}/>
    </>
  )
}

export default App
