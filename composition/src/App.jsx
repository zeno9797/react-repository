import { Container } from './components/Container'
import { Children } from "./components/Children";
import './index.css'

function App() {

  return (
    <>
      <Container title={"Hello world! this is a prop!"}>
        <Children/>
      </Container>
    </>
  )
}

export default App
