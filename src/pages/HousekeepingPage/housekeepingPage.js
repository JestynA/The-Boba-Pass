import React, { Component } from 'react';

import CustomerNavBar from './../../components/navbar/customerNavBar';
import StoreEditorContainer from '../../components/containers/storeContainer';
import DrinkEditorContainer from '../../components/containers/drinkContainer';
 
 const housekeepingPage = () => {
    return (
        <div>
            <CustomerNavBar/>
            <StoreEditorContainer/>        
            <DrinkEditorContainer/>
        </div>
    );
 };


export default housekeepingPage;