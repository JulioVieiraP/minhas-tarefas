import { BrowserRouter } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import Home from './Pages/Home'
import RouterView from './Routes/RouteView'
import Cadastro from './Pages/Cadastro'

function App() {
  return (
    <>
      <EstiloGlobal />
      <BrowserRouter>
        <Container>
          <RouterView Home={<Home />} NovaTarefa={<Cadastro />} />
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
