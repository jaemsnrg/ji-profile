import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const createStoreWithMiddleware = (initialState = {}) =>
  (createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(apiMiddleware, logger)
    )));
export default createStoreWithMiddleware;
