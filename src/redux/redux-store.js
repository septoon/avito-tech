import {  combineReducers, createStore } from 'redux'
import contentReducer from './content-reducer'

let reducers = combineReducers({
    content: contentReducer
})

const store = createStore(reducers)

window.__store__ = store

export default store
