//please verify that the Delivery address is correct
import react from 'react';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import PizzaCards from './PizzaCards';

function showAddress() {
    const dispatch = useDispatch();

    useEffect(() => {
        axios({
            method: 'GET',
            url: '/api/pizza',
        })
            .then((response) => {
                dispatch({
                    type: 'what is this part??',
                    payload: response.data, 
                });
            })
            .catch((err) => {
                console.error('BookList useEffect fail:', err);
            });
    }, []);

    return (
        <section>
            
        </section>
    );
}

export default showAddress;
