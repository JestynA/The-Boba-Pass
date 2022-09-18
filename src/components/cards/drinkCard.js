import React from 'react';

import './drinkCard.css'



const drinkCard = (props) => {

    function addToCart(){
    const item={
        name: props.itemName,
        price: props.price
    }

    
    // grab current cart array and update it with pushed in obj
    const arr = props.cart;
    arr.push(item);
    
    props.updateCart({cart: arr},
        console.log('asdsa')
        )

    //console.log(props.cart)
}
    return (
        <button id='drinkButton' onClick={addToCart}>
            <div id='drinkCard'>          
                <h1 id='drinkName'>{props.itemName}</h1>
                <h3 id='drinkDesc'>{props.itemDesc}</h3>    
                <p id='drinkPrice'>{props.price}</p>    
            </div>
        </button>
    );
};

export default drinkCard;