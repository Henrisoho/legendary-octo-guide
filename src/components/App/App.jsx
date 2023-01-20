import React from 'react';
import axios from 'axios';
import './App.css';
import HomePage from '../HomePage/Rendering/HomePage';
import DeliveryInstructions from '../DeliveryInstructions/Rendering/DeliveryInstructions';
import CheckOut from '../CheckOut/Checkout';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../Admin/Admin';
import Thanks from './thanks';


function App() {

  return (
    <Router>
   <div className='App'>
     <nav>
          <Link to="/admin">Admin</Link>
          <div></div>
          <Link to="/">customer</Link>
        </nav>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
        <Route exact path="/">
            <HomePage/>
        </Route>

        <Route exact path="/deliveryInstructions">
            <DeliveryInstructions />
        </Route>

        <Route exact path="/checkout">
            <CheckOut />
        </Route>

        <Route exact path="/thanks">
            <Thanks/>
        </Route>

        <Route exact path="/admin">
            <Admin/>
        </Route>

    </div>
</Router>
  );
}

export default App;
