import React from 'react';
import StoreCard from './../cards/storeCard'

import './storeDisplay.css'


const storeDisplay = ({storeList}) => {

   const stores = storeList.map((store) => {
    return (
        <StoreCard store = {store} key = {store.vendor_id}/> 
    )
   })

    return (
        <div id='stores'>
            {stores}
        </div>
    );
};

export default storeDisplay;