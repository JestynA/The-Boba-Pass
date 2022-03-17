import React, { useState , useEffect } from 'react';
import { Provider } from 'react-redux';
import StoreContainer from '../../components/containers/storeContainer';
import store from '../../store';
import StoreDisplay from '../../components/displays/storeDisplay';

import CustomerNav from '../../components/navbar/customerNavBar'

import './customerHomepage.css'

const customerHomepage = () => {

    const [state, setState] = useState({
        response: null
    })

    useEffect(() => {

        fetch('/db/getStores',{
            method: 'GET',

        })
        .then(data => data.json())
        .then(data => {
            console.log(data)
            setState({response: data})
            //  storeList = data;
            //  console.log(storeList)
        })

    },[])


    return (
        <div>
        <CustomerNav/>
            <div id='header'>
                <div id='currOrderBox'>

                </div>
                <div id='membershipStatusBox'>

                </div>

            </div>
                
            <div id='body'>
            <Provider store={store}>
                <StoreDisplay storeList={state.response}/>
   
            </Provider>
            
            </div>

            <div id='footer'>

            </div>
        </div>
    );
};

export default customerHomepage;