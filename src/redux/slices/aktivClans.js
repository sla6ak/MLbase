import { createSlice } from '@reduxjs/toolkit'

const initialButtons = {
  bezLen: { onState: false },
  lenaEst: { onState: false },
  oldSchool: { onState: false },
  feniks: { onState: false },
  slavaRycari: { onState: false },
  prometey: { onState: false },
  gravicapa: { onState: false },
  enigma: { onState: false },
  pauk: { onState: false },
  kings: { onState: false }
}

export const aktivClans = createSlice({
  name: 'errorUser',
  initialState: initialButtons,
  reducers: {
    // Редуктор для обновления состояния кнопки по индексу
    toggleButtonClans: (state, action) => {
      const buttonName = action.payload
      state[buttonName].onState = !state[buttonName].onState
    }
    // Другие редукторы по мере необходимости
  }
})

export const { toggleButtonClans } = aktivClans.actions
