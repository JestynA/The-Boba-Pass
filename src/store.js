import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './redux/reducers/combineReducers';

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(logger, thunk)),
);

export default store;