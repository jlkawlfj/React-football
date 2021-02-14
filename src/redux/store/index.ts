import { createStore, applyMiddleware, compose, getDefaultMiddleware } from '@reduxjs/toolkit'
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'

import rootReducer from '../reducers'

export const history = createBrowserHistory({ basename: `${process.env.REACT_APP_API_PUBLIC_URL}` })

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const enhancer = composeEnhancers(applyMiddleware( routerMiddleware(history), ...getDefaultMiddleware()))
const store = createStore(rootReducer, enhancer)

export default store