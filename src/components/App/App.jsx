import React from 'react';
import axios from 'axios';
import './App.css';
import HomePage from '../HomePage/HomePage';
import DeliveryInstructions from '../DeliveryInstructions/DeliveryInstructions';
import CheckOut from '../CheckOut/Checkout';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../Admin/Admin';

function App() {

  return (
    <Router>
   <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/deliveryInstructions">All Students</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
                <li><Link to="/admin">Admin</Link></li>

            </ul>
        </nav>

        <Route exact path="/">
            <HomePage/>
        </Route>

        <Route exact path="/deliveryInstructions">
            <DeliveryInstructions />
        </Route>

        <Route exact path="/checkout">
            <CheckOut />
        </Route>

        <Route exact path="/admin">
            <Admin/>
        </Route>

    </div>
</Router>
  );
}

export default App;
