import BotaoAdicionar from '../../components/BotaoAdicionar'
import ListaDeTarefas from '../../containers/ListaDeTarefas'
import Sidebar from '../../containers/Sidebar'

const Home = () => {
  return (
    <>
      <Sidebar MostrarFiltros />
      <ListaDeTarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
