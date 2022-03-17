import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../reducers/actionTypes'
import { Link } from 'react-router-dom';

const storeCard = (props) => {
    return (
        <div id='storeCard'>
        <Link to={'/'+props.storeName}>
            <div id='image'>
                {/* <image src={storeImage}></image> */}
            </div>
            <div id='storeData'>
                <h2>{props.storeName}</h2>
                <p>Time: 5 mins <br></br> Distance: 1 mi.</p>

            </div> 
        </Link>


            
        </div>
    );
};

export default storeCard;