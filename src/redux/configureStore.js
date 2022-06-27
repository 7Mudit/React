// import {configureStore} from 'redux'
import { createStore } from '@reduxjs/toolkit'
import {Reducer,initialState} from './reducer.js'

export const ConfigureStore=()=>{
    const store=createStore(Reducer,initialState)
    return store
}