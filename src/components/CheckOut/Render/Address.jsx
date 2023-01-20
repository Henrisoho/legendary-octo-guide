//please verify that the Delivery address is correct
import react from 'react';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import PizzaCards from './PizzaCards';

function showAddress() {
    const needReduxStore = useSelector((store) => store.Redux);
    const dispatch = useDispatch();

    useEffect(() => {
        axios({
            method: 'GET',
            url: '/api/orders',
        })
            .then((response) => {
            })
            .catch((err) => {
                console.error(
                    'error happened in the showAddress axios get. ',
                    err
                );
            });
    }, []);


}

export default showAddress;