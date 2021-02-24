import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IAppState {
  isDarkTheme: boolean
  language: string
  error: number | null
  errorMessage: string | null
}

const LSGet = (value: string) => global.localStorage.getItem(value)
const LSSet = (key: string, value: string) => global.localStorage.setItem(key, value)

const initialState: IAppState = {
  isDarkTheme: 'dark' === LSGet('theme'),
  language: 'ru' === LSGet('language') ? 'ru' : 'en',
  error: null,
  errorMessage: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: (state, { payload: { isDarkTheme } }: PayloadAction<{ isDarkTheme: boolean }>) => {
      isDarkTheme ? LSSet('theme', 'dark') : LSSet('theme', 'light')
      state.isDarkTheme = isDarkTheme
    },
    toggleLanguage: (state, { payload }: PayloadAction<{ language: string }>) => {
      global.localStorage.setItem('language', payload.language)
      state.language = payload.language
    },
  },
})
export const { toggleTheme, toggleLanguage } = appSlice.actions

export const appReducer = appSlice.reducer
