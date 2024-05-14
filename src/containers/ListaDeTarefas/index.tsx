import { useSelector } from 'react-redux'

import Tarefa from '../../components/Tarefa'
import * as S from './styles'
import { RootReducer } from '../../redux/store'

const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
    <S.Container>
      <p>2 tarefas marcadas como: &quot;categoria&quot; e &quot;termo&quot;</p>
      <ul>
        {tarefas.map((item) => (
          <li key={item.titulo}>
            <Tarefa
              titulo={item.titulo}
              descricao={item.descricao}
              status={item.status}
              prioridade={item.prioridade}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default ListaDeTarefas
