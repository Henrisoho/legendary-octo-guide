import React from "react";
import AddOrder from "./AddOrder";
import RemoveOrder from "./RemoveOrder";

function FetchPizza() {


return (
    <>
    fetch the pizza information here
    
        <form action="order pizza">




            <button><AddOrder /></button>
            <button><RemoveOrder /></button>
        </form>
    </>
)
}


export default FetchPizza;