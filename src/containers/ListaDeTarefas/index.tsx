// ListaDeTarefas.tsx
import Tarefa from '../../components/Tarefa'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'

const ListaDeTarefas = () => {
  const tarefas = [
    {
      titulo: 'Estudar TypeScript',
      descricao: 'Ver a aula 3 da EBAC',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE
    },
    {
      titulo: 'Pagar a conta de internet',
      descricao: 'Baixar fatura do Gmail',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA
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
