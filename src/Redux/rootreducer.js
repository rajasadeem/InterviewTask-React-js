import { combineReducers } from "redux";
import productReducer from './Reducers/productreducer';

const Reducers = combineReducers({
    products: productReducer
})

export default Reducers
