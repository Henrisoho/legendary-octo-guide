import * as React from 'react';
import Input from '@mui/material/Input';
import { useHistory } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import axios from 'axios';



export default function AddressForm() {
    
    const history = useHistory();
    const [customer_name, setName] = useState('');
    const [street_address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');

    return (
        <>
            <Box p={3}>
                <form>
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

                    </Box>
                </form>
            </Box>
            <footer>
                <Box p={4}>
                    <Button variant="contained" onClick={() => { history.push('/checkout') }}>Next</Button>
                </Box>
            </footer>
        </>
    )
}
