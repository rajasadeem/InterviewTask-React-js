import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import Reducers from "./rootreducer"

export default function configureStore(){
    const store =  createStore(Reducers)
    return store;
}