import { BrowserRouter } from 'react-router-dom'

import EstiloGlobal, { Container } from './styles'
import Home from './Pages/Home'
import RouterView from './Routes/RouteView'

function App() {
  return (
    <>
      <EstiloGlobal />
      <BrowserRouter>
        <Container>
          <RouterView Home={<Home />} NovaTarefa={<h1>Ola mundo</h1>} />
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App
