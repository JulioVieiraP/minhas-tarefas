import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { alteraStatus, editar, remover } from '../../redux/reducers/tarefas'

import * as enums from '../../utils/enums/Tarefa'

import * as S from './styles'
import { Botao, BotaoSalvar } from '../../styles'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ titulo, prioridade, status, descricao, id }: Props) => {
  const dispath = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricaoInput, setDescricaoInput] = useState('')

  useEffect(() => {
    if (descricao.length > 0) {
      setDescricaoInput(descricao)
    }
  }, [descricao])

  const cancelarEdicao = () => {
    setEstaEditando(false)
    setDescricaoInput(descricao)
  }

  const Editar = () => {
    dispath(
      editar({
        descricao,
        id,
        prioridade,
        status,
        titulo
      })
    )
    setEstaEditando(false)
  }

  const alteraStatusTarefa = (e: ChangeEvent<HTMLInputElement>) => {
    dispath(
      alteraStatus({
        id,
        finalizado: e.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type="checkbox"
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusTarefa}
        />
        <S.Titulo>
          {estaEditando && <em>Editando: </em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag prioridade={prioridade} parametro="prioridade">
        {prioridade}
      </S.Tag>
      <S.Tag status={status} parametro="status">
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricaoInput}
        onChange={(e) => setDescricaoInput(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={Editar}>Salvar</BotaoSalvar>
            <S.BotaoRed onClick={cancelarEdicao}>Cancelar</S.BotaoRed>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoRed onClick={() => dispath(remover(id))}>
              Remover
            </S.BotaoRed>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
