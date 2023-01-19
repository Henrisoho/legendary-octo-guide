import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

ReactDOM.render(<App />, document.getElementById('root'));

function RemoveOrder(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
    if (objWithIdIndex > -1) {
      arr.pop(objWithIdIndex, 1);
    }
    return NewOrder;
  }
  
  removeObjectWithId(arr, 2);
    
