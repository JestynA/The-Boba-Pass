import React from 'react';
import StoreCard from './../cards/storeCard'

import './storeDisplay.css'


const storeDisplay = ({storeList}) => {

    //get request to grab all the store elements
   
    const storeListEl = []
   //const list = JSON.parse(JSON.stringify(props.storeList));
   for(const el in storeList){
       storeListEl.push(<StoreCard storeName={storeList[el].vendor_name} storeDesc={storeList[el].description} address={storeList[el].address} city={storeList[el].city} zip={storeList[el].zip} id={storeList[el].vendor_id} key={el}/>)
   }

    return (
        <div id='stores'>
            {storeListEl}
        </div>
    );
};

export default storeDisplay;