import { createStore, applyMiddleware, Middleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { rootReducer } from 'store/reducers/index'

const middlewares: Middleware[] = [thunk]

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger)
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)
