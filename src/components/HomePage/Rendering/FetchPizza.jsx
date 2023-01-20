import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import PizzaCards from "./PizzaCards";

function FetchPizza() {

  const menuList = useSelector(store => store.menuList);
   const dispatch = useDispatch();

useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then((response) => {
      dispatch({
        type: 'SET_MENU',
        payload: response.data
      })
    }).catch((err) => {
      console.error('menuList useEffect fail:', err)
    })
  }, [])
    

    return (
        <>
        <PizzaCards menuList={menuList}/>
        </>
    )



}

export default FetchPizza;