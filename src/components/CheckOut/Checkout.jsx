import React from "react";
import OrderTable from "./Render/OrderTable";
import OrderTotal from "./Render/OrderTotal";
import { useHistory } from 'react-router-dom';
import { Button, Box } from '@mui/material';

function CheckOut() {
const history = useHistory();

    return (
    <>
        <h1>Checkout</h1>
        <OrderTable />
        <OrderTotal />
        <Box p={4}>
            <Button variant="contained" onClick={() => { history.push('/thanks') }}>Checkout</Button>
        </Box>
    </>
    )
}


export default CheckOut;