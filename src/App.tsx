import ListaDeTarefas from './containers/ListaDeTarefas'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
