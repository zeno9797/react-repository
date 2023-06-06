import { TodoList } from "./components/TodoList"

function App() {


  return (
    <>
      <TodoList fruits = {["apple", "banana", "orange", "mango", "grape", "kiwi", "pineapple", "strawberry", "watermelon"]}
      render={(arr, eventDelete) => {
        return (
          arr.map((element, index) => {
            return <li key={index}> {element + " "} 
            <button onClick={() => eventDelete(index)}> Delete </button></li> 
          })
        )
      } }
      >
        
      </TodoList>

    </>
  )
}

export default App
