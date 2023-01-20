import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { Provider } from 'react-redux'
import { applyMiddleware, createStore, combineReducers } from 'redux';
import {logger} from 'redux-logger'

//ADD ITEM//
const cartAddRem = (state = [], action) => {
    switch (action.type) {
      case 'SET_CART':
        return action.payload;
     case 'REMOVE_PIZZA_FROM_ORDER':
        return state.filter(pizza => pizza.id !== action.payload.id)
    case 'ADD_PIZZA_TO_ORDER':
        return [...state, action.payload]
      default:
        return state;
    }
}
//END ADD ITEM//

//ADD ALL//
const addTotal = (state = 0, action) => { 
    if (action.type === 'ADD_TOTAL') {
        return state + action.payload;
    }
    return state;
}

//RENDER MENU LIST
const menuList = (state = [], action) => {
  switch (action.type) {
    case 'SET_MENU':
      return action.payload;
    default:
      return state;
  } 
}
//RENDER MENU LIST//

//STORE//
const pizzaStore = createStore(
  combineReducers({
    menuList,
    cartAddRem,
    addTotal
  }),
  applyMiddleware(
    logger
  )
);
//END STORE//


ReactDOM.render(<Provider store={pizzaStore}> <App /></Provider>,document.getElementById('root'));
