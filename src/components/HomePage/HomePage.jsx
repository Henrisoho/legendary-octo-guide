import React from "react";
import AddOrder from "./AddOrder";
import FetchPizza from "./FetchPizza";
import OrderTotal from "./OrderTotal";
import RemoveOrder from "./RemoveOrder";

function HomePage() {


return (
    <>
      <div><OrderTotal/></div>
      <h1> Home Page</h1>
      <div><FetchPizza/></div>
      <button>next Page</button>
    </>
  )
}


export default HomePage;