import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { Provider } from 'react-redux'
import { applyMiddleware, createStore, combineReducers } from 'redux';
import {logger} from 'redux-logger'

//ADD ITEM//

//END ADD ITEM//


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
    menuList
  }),
  applyMiddleware(
    logger
  )
);
//END STORE//


ReactDOM.render(<Provider store={pizzaStore}> <App /></Provider>,document.getElementById('root'));
