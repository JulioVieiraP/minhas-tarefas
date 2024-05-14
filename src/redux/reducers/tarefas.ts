import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefas = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JavaScript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Estudar React.js',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Praticar o useEffect',
      2
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefas.actions

export default tarefas.reducer
