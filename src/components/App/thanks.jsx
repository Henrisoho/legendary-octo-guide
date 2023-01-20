import React from "react";
import { useHistory } from 'react-router-dom';
import { Button, Box } from '@mui/material';

function Thanks() {
const history = useHistory();

return (
    <>
      <h1>Thank you for ordering</h1>
              <Box p={4}>
            <Button variant="contained" onClick={() => { history.push('/') }}>New Order</Button>
        </Box>
    </>
  )
}


export default Thanks;