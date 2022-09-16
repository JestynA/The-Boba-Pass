import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actionTypes'
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

const storeCard = (props) => {
    return (
        <Link to={'/vendor/'+props.storeName+'/'+props.id} id = 'storeCard'>
            <img id='image' src={vendorPics[props.storeName]}></img>  
            <div id='storeData'>
                    <div>
                        <h2 id='storeName'>{props.storeName}</h2>
                        <p id='storeAddress'>{props.address}<br></br>{props.city} {props.zip}</p>
                    </div>
                    <div id='details'>
                        <p>Time: 5 mins <br></br> Distance: 1 mi.</p>
                    </div>               
            </div> 
        </Link>
    );
};

export default storeCard;