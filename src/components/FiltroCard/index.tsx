import { useDispatch, useSelector } from 'react-redux'
import { alteraTermoFiltro } from '../../redux/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../redux/store'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'todas' | 'status'
  valor?: enums.Prioridade | enums.Status
}

const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispath = useDispatch()
  const { filtros, tarefas } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtros.criterio === criterio
    const mesmoValor = filtros.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispath(
      alteraTermoFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = contarTarefas()
  const ativo = verificaEstaAtivo()
  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.label>{legenda}</S.label>
    </S.Card>
  )
}

export default FiltroCard
