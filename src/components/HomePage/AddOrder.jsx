import React from "react";
import { useState } from 'react';
import { useDispatch } from 'react-redux';


function AddOrder() {
    const dispatch = useDispatch();
    const pushPizza = () => {
        event.preventDefault();
        console.log('alert', pizza.id);
        dispatch({
            type: 'CREATE_PIZZA',
            payload: {
                
            }
        });
    }

return (
    <>
      <button onClick={pushPizza}>ADD</button>
    </>
  )
}


export default AddOrder;