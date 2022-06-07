import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import  logger from 'redux-logger';
import todoReducer from './reducer'
import Reactotron from './../ReactotronConfig'
// root reducer
// const rootReducer =()=>{
//     return "Nhat";
// }
// saga file

//  const sagaMiddleware = createSagaMiddleware();
//  const middlewares = [logger, sagaMiddleware];

//  export const store = createStore(userReducer, applyMiddleware(...middlewares));

//sagaMiddleware.run();

//const store = createStore(todoReducer)

const store = createStore(todoReducer, Reactotron.createEnhancer())

export default store 