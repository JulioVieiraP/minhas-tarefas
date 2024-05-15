import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import * as enums from '../../utils/enums/Tarefa'

type FiltroState = {
  termo?: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, { payload }: PayloadAction<string>) => {
      state.termo = payload
    },
    alteraTermoFiltro: (state, { payload }: PayloadAction<FiltroState>) => {
      state.criterio = payload.criterio
      state.valor = payload.valor
    }
  }
})

export const { alteraTermo, alteraTermoFiltro } = filtroSlice.actions

export default filtroSlice.reducer
