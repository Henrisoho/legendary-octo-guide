import React from "react";
import AddOrder from "./AddOrder";
import FetchPizza from "./FetchPizza";
import OrderTotal from "./OrderTotal";
import RemoveOrder from "./RemoveOrder";

function HomePage() {


return (
    <>
      <h1> Home Page</h1>
      <div><FetchPizza/></div>
      <div><OrderTotal/></div>
      <div><AddOrder/></div>
      <div><RemoveOrder/></div>
      <button>next Page</button>
    </>
  )
}


export default HomePage;