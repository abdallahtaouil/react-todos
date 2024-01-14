import {createStore}from 'redux'
import { reducer } from './Reducer';

export const store = createStore(
    reducer, /* preloadedState, */
    //lier le store avec l'extension 
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );