import * as React from 'react';
import Input from '@mui/material/Input';
import { useHistory } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';



export default function AddressForm() {

    const history = useHistory();
    const [customer_name, setName] = useState('');
    const [street_address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');


    const cart =  useSelector(store => store.cartAddRem);
    const total =  useSelector(store => store.planeCount);
    console.log(`in ${cart}`)

    const handleSubmit = event => {
    event.preventDefault();

    console.log(`Adding order`, {customer_name, street_address, city, zip, type, cart});

    axios({
      method: 'POST',
      url: '/api/order',
      data: 
        {
            customer_name: customer_name,
            street_address: street_address,
            city: city,
            zip: zip,
            type: type,
            total: 12,
            pizzas: cart
        }

    }).then((response) => {
      console.log(response)
    }).catch((err) => {
      console.error('handleSubmit fail:', err)
    })
  };


    return (
        <>
            <Box p={3}>
                <form onSubmit={handleSubmit}>
                    <Box p={4}>
                        <Input
                            type="text"
                            placeholder='Name'
                            value={customer_name}
                            onChange={(event) => setName(event.target.value)}

                        />
                    </Box>

                    <Box p={4}>
                        <Input
                            type="text"
                            placeholder='Street Address'
                            value={street_address}
                            onChange={(event) => setAddress(event.target.value)}

                        />
                    </Box>

                    <Box p={4}>
                        <Input
                            type="text"
                            placeholder='City'
                            value={city}
                            onChange={(event) => setCity(event.target.value)}

                        />
                    </Box>

                    <Box p={4}>
                        <Input
                            type="text"
                            placeholder='Zip'
                            value={zip}
                            onChange={(event) => setZip(event.target.value)}

                        />
                    </Box>

                    <Box p={4}>
                        <Input
                            type="text"
                            placeholder='Delivery Or Take Out'
                            value={type}
                            onChange={(event) => setType(event.target.value)}

                        />
                    </Box>
                    <button type='submit'>submit</button>
                </form>
            </Box>
            <footer>
                <Box p={4}>
                    <Button type="submit" variant="contained" onClick={() => { history.push('/checkout') }}>Next</Button>
                </Box>
            </footer>
        </>
    )
}
