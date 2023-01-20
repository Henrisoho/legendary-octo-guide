import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Button } from '@mui/material';


function AddOrder({ pizza }) {
const dispatch = useDispatch()

const onAdd = (event) =>{
  dispatch({
        type: 'ADD_PIZZA_TO_ORDER',
        payload: {
          pizza_id: pizza.id,
          quantity: 1
        }
      })
}

  return (
    <>
      <Button variant="contained" onClick={() => {onAdd()}}> Add </Button>
    </>
  )
}


export default AddOrder;