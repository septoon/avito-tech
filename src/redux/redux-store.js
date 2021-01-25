import {  combineReducers, createStore } from 'redux'
import contentReducer from './content-reducer'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    content: contentReducer,
    form: formReducer
})

const store = createStore(reducers)

window.__store__ = store

export default store
