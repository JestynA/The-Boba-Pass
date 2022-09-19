import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StoreDisplay from '../../components/displays/storeDisplay';
import CustomerNav from '../../components/navbar/customerNavBar'
import * as actions from '../../redux/actions'
import './customerHomepage.css'

const customerHomepage = () => {

    
    const [stores, setStores] = useState([])
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/db/getStores',{
            method: 'GET',
        })
        .then(data => data.json())
        .then(res => {
            setStores(res)
            setLoading(false)
        })
        .catch(err => {
            const errorMsg = err.message
            console.log(errorMsg)
        })
        
    }, [])
 

    return (
        <>
            <CustomerNav/>
            <div id='header'>
                <div id='currOrderBox'>
                    <h1>Current Order</h1>
                </div>
                <div id='membershipStatusBox'>
                    <h1>Remaining Drinks</h1>
                </div>
            </div>
                
            <div id='body'>
            { isLoading ? 
                (<h1> Loading... </h1>) : 
                (<StoreDisplay storeList = {stores}/>)
            }  
            </div>
        </>
    );
};

export default customerHomepage;