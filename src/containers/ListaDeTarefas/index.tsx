import Tarefa from '../../components/Tarefa'
import * as S from './styles'

const ListaDeTarefas = () => {
  const tarefas = [
    {
      titulo: 'estudar typeScript',
      descricao: 'ver a aula 3 da ebac',
      prioridade: 'urgente',
      status: 'pendente'
    },
    {
      titulo: 'Pagar a conta de internet',
      descricao: 'Baixar fatura do Gmail',
      prioridade: 'urgente',
      status: 'concluida'
    }
  ]

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
