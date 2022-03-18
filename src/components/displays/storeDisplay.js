import React, { useEffect } from 'react';
import StoreCard from './../cards/storeCard'

import './storeDisplay.css'

const storeDisplay = (props) => {

  
    //get request to grab all the store elements
   
    const storeListEl = []
   const list = JSON.parse(JSON.stringify(props.storeList));
   for(const el in list){
       storeListEl.push(<StoreCard storeName={list[el].vendor_name} storeDesc={list[el].description} address={list[el].address} city={list[el].city} zip={list[el].zip} id={list[el].vendor_id} key={el}/>)
   }

    return (
        <div id='stores'>
            {storeListEl}
        </div>
    );
};

export default storeDisplay;