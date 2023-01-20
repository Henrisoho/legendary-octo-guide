import React from "react";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

function RemoveOrder({pizza}) {
const remove = () => {
    axios({
      method: 'DELETE',
      url: `/api/order/${pizza.id}`
    }).then((response) => {
      console.log(response)
    }).catch((err) => {
      console.error('pizza didnt delete:', err);
    })
  }

return (
    <>
     <Button variant="contained" onClick={remove}> Remove </Button>
    </>
  )
}


export default RemoveOrder;