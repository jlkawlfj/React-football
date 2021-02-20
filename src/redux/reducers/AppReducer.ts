import { createSlice, PayloadAction } from '@reduxjs/toolkit'
  


interface IInitialState {
  isDarkTheme: boolean | null | string,
  language: null | string | any,
  error: number | null,
  errorMessage: string | null,
}
const LS = (x: any) => global.localStorage.getItem(x)
const initialState: IInitialState = {
  isDarkTheme: 'true' === LS('isDarkTheme'),
  language: ((null === LS('language')) ? ('en' ): LS('language')),
  error: null,
  errorMessage: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: (state, {payload}: PayloadAction<any>) => {
      global.localStorage.setItem('isDarkTheme', payload.isDarkTheme)
      state.isDarkTheme = payload.isDarkTheme
    },
    toggleLanguage: (state, {payload}: PayloadAction<any>) => {
      global.localStorage.setItem('language', payload.language)
      state.language = payload.language
    },
  },
})
export const {toggleTheme, toggleLanguage} = appSlice.actions

export const appReducer = appSlice.reducer
