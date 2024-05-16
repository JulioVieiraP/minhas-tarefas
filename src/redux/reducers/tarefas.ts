import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar Redux',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      descricao: 'Estudar React'
    },
    {
      id: 2,
      titulo: 'Estudar JavaScript',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      descricao: 'Treinar classes'
    },
    {
      id: 3,
      titulo: 'Estudar TypeScript',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      descricao: 'praticar o vfor'
    }
  ]
}

const tarefas = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, { payload }: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== payload)
    },
    editar: (state, { payload }: PayloadAction<Tarefa>) => {
      const tarefaParaEditar = state.itens.findIndex(
        (item) => item.id === payload.id
      )

      if (tarefaParaEditar >= 0) {
        state.itens[tarefaParaEditar] = payload
      }
    },
    cadastrar: (state, { payload }: PayloadAction<Tarefa>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) => tarefa.titulo.toLowerCase() === payload.titulo.toLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        state.itens.push(payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = tarefas.actions

export default tarefas.reducer
