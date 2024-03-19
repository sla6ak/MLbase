// апи и слайсы
import { aktivClans } from './slices/aktivClans'
import { configureStore } from '@reduxjs/toolkit'

// const initialButtons = {
//   bezLen: { onState: false },
//   lenaEst: { onState: false },
//   oldSchool: { onState: false },
//   feniks: { onState: false },
//   slavaRycari: { onState: false },
//   prometey: { onState: false },
//   gravicapa: { onState: false },
//   enigma: { onState: false },
//   pauk: { onState: false },
//   kings: { onState: false }
// }

export const makeStore = () => {
  return configureStore({
    reducer: {
      aktivClans: aktivClans.reducer
    }
  })
}
