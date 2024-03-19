import { createSlice } from '@reduxjs/toolkit'

// const initialButtons = [
//   { nameE: 'bezLen', onState: false },
//   { nameE: 'lenaEst', onState: false },
//   { nameE: 'oldSchool', onState: false },
//   { nameE: 'feniks', onState: false },
//   { nameE: 'slavaRycari', onState: false },
//   { nameE: 'prometey', onState: false },
//   { nameE: 'gravicapa', onState: false },
//   { nameE: 'enigma', onState: false },
//   { nameE: 'pauk', onState: false },
//   { nameE: 'kings', onState: false }
// ]
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
    toggleButton: (state, action) => {
      const buttonName = action.payload
      state[buttonName].onState = !state[buttonName].onState
    }
    // Другие редукторы по мере необходимости
  }
})

export const { toggleButtonClans } = aktivClans.actions
