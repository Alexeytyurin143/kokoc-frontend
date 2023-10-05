import thunkMiddleware from 'redux-thunk'

import { applyMiddleware, combineReducers, compose, createStore } from 'redux'

import { mainReducer } from './main-reducer'
import { registrationReducer } from './registration-reducer'

const reducers = combineReducers({
    main: mainReducer,
    registration: registrationReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.store = store
