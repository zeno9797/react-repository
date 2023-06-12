import Form from "./components/Form"

function App() {
  

  return (
    <>
      <Form initialData = {{
        model: "lambo",
        year: "2020",
        color: "black",
      }}/>
    </>
  )
}

export default App
