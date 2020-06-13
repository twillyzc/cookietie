import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

// export const store = createStore(
//   composeWithDevTools(applyMiddleware(sagaMiddleware))
// );
