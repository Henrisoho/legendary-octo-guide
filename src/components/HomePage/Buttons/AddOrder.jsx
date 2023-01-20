import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { Button } from '@mui/material';


function AddOrder({ pizza }) {
const dispatch = useDispatch()

const onAdd = (event) =>{
  AddTotal
  dispatch({
        type: 'ADD_PIZZA_TO_ORDER',
        payload: {
          pizza_id: pizza.id,
          quantity: 1
        }
      })
}

const AddTotal = () =>{
  dispatch ({
    type: 'ADD_TOTAL',
    payload: pizza.price
  })
}

  return (
    <>
      <Button variant="contained" onClick={() => {onAdd()}}> Add </Button>
    </>
  )
}


export default AddOrder;