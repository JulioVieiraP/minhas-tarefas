import Formulario from '../../containers/Formulario'
import Sidebar from '../../containers/Sidebar'

const Cadastro = () => {
  return (
    <>
      <Sidebar MostrarFiltros={false} />
      <Formulario />
    </>
  )
}

export default Cadastro
