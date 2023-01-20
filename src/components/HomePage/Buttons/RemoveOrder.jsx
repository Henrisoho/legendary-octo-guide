import React from "react";
import axios from 'axios';
import { useDispatch, } from 'react-redux';
import { Button } from '@mui/material';

function RemoveOrder({pizza}) {
const dispatch = useDispatch()

const onRemove = (event) =>{
  dispatch({
        type: 'REMOVE_PIZZA_FROM_ORDER',
        payload: {
          pizza_id: pizza.id,
          quantity: 1
        }
      })
}
return (
    <>
     <Button variant="contained" onClick={onRemove}> Remove </Button>
    </>
  )
}


export default RemoveOrder;