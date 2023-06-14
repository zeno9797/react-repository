import Component from "./components/Component"
function App() {

  const list = [{
    name: "pasqualino",
    id: 1234,
    age: 65
  },
  {
  name: "Mago merlino",
    id: 4321,
    age: 101
  },
  {
  name: "ciccio",
    id: 4412,
    age: 16
  }
]

  return (
    <>
      <Component obj={list}/>
    </>
  )
}

export default App
