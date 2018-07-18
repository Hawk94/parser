import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import {default as rootReducer, rootSaga} from 'ducks'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const enchancers = []

if (
  process.env.NODE_ENV === 'development' &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  enchancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

export const store = createStore(
  rootReducer,
  ...enchancers,
  applyMiddleware(...middleware)
)

sagaMiddleware.run(rootSaga)
