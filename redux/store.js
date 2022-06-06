import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import  logger from 'redux-logger';
import todoReducer from './reducer'
// root reducer
// const rootReducer =()=>{
//     return "Nhat";
// }
// saga file

//  const sagaMiddleware = createSagaMiddleware();
//  const middlewares = [logger, sagaMiddleware];

//  export const store = createStore(userReducer, applyMiddleware(...middlewares));

//sagaMiddleware.run();

const store = createStore(todoReducer)

export default store 