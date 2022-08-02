import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleWare from "redux-saga";
import { notesReducer } from "./Reducer";
import { rootSaga } from "./Saga";
const rootReducer = combineReducers({ notes: notesReducer });
const sagaMiddleware = createSagaMiddleWare();

const logger = createLogger();

export const store = createStore(
  rootReducer,
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
