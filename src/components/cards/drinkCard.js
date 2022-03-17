import React from 'react';

import './drinkCard.css'

const drinkCard = (props) => {
    return (
        <button id='drinkButton'>
            <div id='drinkCard'>
            
                <h1 id='drinkName'>{props.itemName}</h1>
                <h3 id='drinkDesc'>{props.itemDesc}</h3>    
                <p id='drinkPrice'>{props.price}</p>


            
            </div>
        </button>
    );
};

export default drinkCard;