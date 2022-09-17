import React, { Component } from 'react';

import CustomerNavBar from './../../components/navbar/customerNavBar';
import StoreContainer from '../../components/containers/storeContainer';
import DrinkContainer from '../../components/containers/drinkContainer';


 
 const housekeepingPage = () => {
    console.log('hello')
    return (
        <div>
            <CustomerNavBar/>
            <StoreContainer/>        
            <DrinkContainer/>
        </div>
    );
 };


export default housekeepingPage;