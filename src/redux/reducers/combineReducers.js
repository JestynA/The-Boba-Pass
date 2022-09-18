import { combineReducers } from 'redux';

// importing reducers
import storeReducer from './storeReducer'
import cartReducer from './cartReducer'

// combine reducers
const reducers = combineReducers({
    storeReducer,
    cartReducer
})

export default reducers;
