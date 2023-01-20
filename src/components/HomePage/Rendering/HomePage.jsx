import React from "react";
import FetchPizza from "./FetchPizza";
import OrderTotal from "./OrderTotal";
import { useHistory } from 'react-router-dom';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';


function HomePage() {
 const history = useHistory();

return (
    <>
      <div><OrderTotal/></div>
      <h1> Home Page</h1>
      <div><FetchPizza/></div>
      <Box p={2}>
      <Button variant="contained" onClick={() => {history.push('/deliveryInstructions')}}>Next</Button>
      </Box>
      <div/>
    </>
  )
}


export default HomePage;