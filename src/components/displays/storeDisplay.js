import React, { useEffect } from 'react';
import StoreCard from './../cards/storeCard'

import './storeDisplay.css'

const storeDisplay = (props) => {

  
    //get request to grab all the store elements
   
    const storeListEl = []
   const list = JSON.parse(JSON.stringify(props.storeList));
   for(const el in list){
       storeListEl.push(<StoreCard storeName={list[el].vendor_name} storeDesc={list[el].storeDesc} key={el} id={list[el].vendor_id}/>)
   }
//    console.log(list[0])
    
    // for(let i = 0; i < props.storeList.length; i++){
    //     storeListEl.push(<StoreCard storeName={storeList[i].storeName} storeDesc={storeList[i].storeDesc}/>)
    // }


    return (
        <div id='stores'>
            {storeListEl}
        </div>
    );
};

export default storeDisplay;