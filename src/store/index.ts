import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { middleware as thunkMiddleware } from 'redux-saga-thunk';

import { rootReducer } from 'store/reducers';
import { rootSaga } from 'store/sagas/root.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
