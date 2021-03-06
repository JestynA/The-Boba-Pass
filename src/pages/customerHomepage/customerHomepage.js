import React, { useState , useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';

import StoreDisplay from '../../components/displays/storeDisplay';
import CustomerNav from '../../components/navbar/customerNavBar'


import './customerHomepage.css'

const customerHomepage = () => {

    const [state, setState] = useState({
        stores: null,
    })

    useEffect(() => {

        fetch('/db/getStores',{
            method: 'GET',

        })
        .then(data => data.json())
        .then(data => {
            // console.log(data)
            setState({stores: data})
            //  storeList = data;
            //  console.log(storeList)
        })

    },[])


    return (
        <div>
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
            <Provider store={store}>
                <StoreDisplay storeList={state.stores}/>
            </Provider>
            
            </div>

            <div >

            </div>
        </div>
    );
};

export default customerHomepage;