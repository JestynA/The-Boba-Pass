import React from 'react';
import DrinkCard from '../cards/drinkCard';

import './drinkDisplay.css'

const drinkDisplay = ({drinkList}) => {


    const drinkCards = drinkList.map((drink) => {
        return (
            <DrinkCard drink = {drink} key = {drink.item_id}/>
        )
    })
    return (
        <div id='drinkShelf'>
           {drinkCards} 
        </div>
    );
};

export default drinkDisplay;