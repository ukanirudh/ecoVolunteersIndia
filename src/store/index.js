import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './root-reducers';
import thunkMiddleware from 'redux-thunk';
const middleware = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, composeWithDevTools(middleware));

export default store;
