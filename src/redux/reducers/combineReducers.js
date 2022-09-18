import { combineReducers } from 'redux';

// importing reducers
import storeReducer from './vendorReducer'
import cartReducer from './cartReducer'

// combine reducers
const reducers = combineReducers({
    storeReducer,
    cartReducer
})

export default reducers;
