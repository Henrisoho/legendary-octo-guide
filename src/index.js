import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const menuList = (state = [], action) => {
    switch (action.type) {
      case 'SET_MENU':
        return action.payload; // 👈 action.payload evaulates to
                               // the array of book objects we sent :)
      default:
        return state;
    }
}

const pizzaStore = createStore(
    combineReducers({
    menuList
    }),
    applyMiddleware(logger)
);


ReactDOM.render(<Provider store={pizzaStore}> <App /></Provider>,document.getElementById('root'));
