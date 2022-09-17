import { combineReducers } from 'redux';

// importing reducers
import storeReducer from './storeReducer'

// combine reducers
const reducers = combineReducers({
    storeReducer
})

export default reducers;
