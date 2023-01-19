import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, combineReducers } from 'redux';
import {logger} from 'redux-logger'

//ADD ITEM//
const addOrder = 
(state=[], action) => {
    order
  if (action.type === 'CREATE_PIZZA') {
    console.log('in the CREATE_PIZZA if block:', action);
    const newPizzas = action.payload;

    
    const newOrder = {
	pizzas: newPizzas,
    }

    let newOrderArray = [...state]

    newOrderArray.push(newOrder)

    return newOrderArray;
  }
  if (action.type === 'CREATE_ADDRESS') {
    console.log('in the CREATE_ADDRESS if block:', action);
    const newAddress = action.payload;

    
    const newOrder = {
    id: newOrderId,
	pizzas: newPizzas,
	address: newAddress
    }

    let newOrderArray = [...state]

    newOrderArray.push(newOrder)

    return newOrderArray;
  }
  return state;
}
//END ADD ITEM//


//STORE//
const pizzaStore = createStore(
  combineReducers({
    addOrder,
  }),
  applyMiddleware(
    logger
  )
);
//END STORE//


ReactDOM.render(<Provider store={pizzaStore}><App /></Provider>, document.getElementById('root'));
