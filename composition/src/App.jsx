import { Container } from './components/Container'
import { Children } from "./components/Children";
import './index.css'
import { Welcome } from './components/Welcome';

function App() {

  return (
    <>
      <Container title={"Hello world! this is a prop!"}>
        <Children/>
        <Welcome/>
      </Container>
    </>
  )
}

export default App
