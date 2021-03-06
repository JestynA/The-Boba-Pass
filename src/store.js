import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './components/reducers/combineReducers';


const store = createStore(
    reducers,
    composeWithDevTools(),
);

export default store;