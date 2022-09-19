import { combineReducers } from 'redux';

// importing reducers
import cartReducer from './cartReducer'

// combine reducers
const reducers = combineReducers({
    cartReducer
})

export default reducers;
