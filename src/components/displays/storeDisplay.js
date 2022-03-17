import React from 'react';
import StoreCard from './../cards/storeCard'

const storeDisplay = (props) => {

    const storeList = props.storeList
    const storeListEl = []
    for(let i = 0; i < storeList.length; i++){
        storeListEl.push(<StoreCard storeName={storeList[i].storeName} storeDesc={storeList[i].storeDesc}/>)
    }


    return (
        <div>
            {storeListEl}
        </div>
    );
};

export default storeDisplay;