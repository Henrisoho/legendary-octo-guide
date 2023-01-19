import React from "react";
import AddOrder from "./AddOrder";
import RemoveOrder from "./RemoveOrder";
import {useState, useEffect} from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";

function FetchPizza() {

const pizzaData = useSelector(store => store.menuList);

    useEffect(()=>{
        axios({
                method: 'GET',
                url:'/api/pizza'
        }).then((res) =>{
                dispatchEvent({
                    type: 'SET_MENU',
                    payload: res.data
                })
            }).catch(err=>{
                alert('error in FetchPizza get route', err)
            })
        },[])

    

    return (
        <>
            fetch the pizza information here
            {pizzaData.map((allPizza) =>{
                return <form action="order pizza">
            <ul>
                        return<li key={allPizza.id}>
                            {allPizza.name}
                            {allPizza.description}
                            {allPizza.price}
                            </li>
            </ul>
            <button><AddOrder /></button>
            <button><RemoveOrder /></button>
            </form>
            })}
        </>
    )



}

export default FetchPizza;