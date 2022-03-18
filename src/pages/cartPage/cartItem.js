import React from 'react';

import './cartItem.css';

const cartItem = (props) => {
    return (
        <div id='cartItem'>
            <div id='name'>{props.name}</div>
            <div id='price'>{props.price}</div>
            
        </div>
    );
};

export default cartItem;