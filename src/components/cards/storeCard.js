import React from 'react';
import { Link } from 'react-router-dom';

import './storeCard.css'
import Tastea from './../../../assets/pics/locations/storePics/Tastea.png'
import bobaFiend from './../../../assets/pics/locations/storePics/BobaFiend.jpg'
import dingTea from './../../../assets/pics/locations/storePics/dingTea.jpg'
import roastingWater from './../../../assets/pics/locations/storePics/RoastingWater.jpg'
import tigerSugar from './../../../assets/pics/locations/storePics/Tiger Sugar.jpg'

const vendorPics = {
    'Tastea' : Tastea,
    'Tiger Sugar' : tigerSugar,
    'Boba Fiend' : bobaFiend,
    'Ding Tea' : dingTea,
    'Roasting Water' : roastingWater
}

const storeCard = ({store}) => {
    return (
        <Link to={`/vendor/${store.vendor_name}/${store.vendor_id}`} id = 'storeCard'>
            <img id='image' src={vendorPics[store.vendor_name]}></img>  
            <div id='storeData'>
                    <div>
                        <h2 id='storeName'>{store.vendor_name}</h2>
                        <p id='storeAddress'>{store.address}<br></br>{store.city} {store.zip}</p>
                    </div>
                    <div id='detailsBox'>
                        <p id='details'>Time: 5 mins <br></br> Distance: 1 mi. <br/> id : {store.id}</p>
                    </div>               
            </div> 
        </Link>
    );
};

export default storeCard;