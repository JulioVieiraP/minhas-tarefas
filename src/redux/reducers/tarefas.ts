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
      const indexDaTarefa = state.itens.findIndex(
        (item) => item.id === payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = payload
      }
    },
    cadastrar: (state, { payload }: PayloadAction<Omit<Tarefa, 'id'>>) => {
      const tarefaJaExiste = state.itens.find(
        (tarefa) => tarefa.titulo.toLowerCase() === payload.titulo.toLowerCase()
      )
      if (tarefaJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1]
        const tarefaNova = {
          ...payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1
        }
        state.itens.push(tarefaNova)
      }
    },
    alteraStatus: (
      state,
      { payload }: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDaTarefa = state.itens.findIndex(
        (item) => item.id === payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } = tarefas.actions

export default tarefas.reducer
