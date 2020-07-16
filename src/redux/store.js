import {applyMiddleware,compose, createStore} from 'redux';
import {persistStore} from 'redux-persist'
import thunk from 'redux-thunk';
import ROOTRDE from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=createStore(ROOTRDE,composeEnhancers(applyMiddleware(thunk)))
export const persistor=persistStore(store)