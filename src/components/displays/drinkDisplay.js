import React from 'react';
import DrinkCard from '../cards/drinkCard';

import './drinkDisplay.css'

const drinkDisplay = (props) => {


    const drinkListEl = [];
    const list = JSON.parse(JSON.stringify(props.drinkList))
    for(const el in list){
        drinkListEl.push(<DrinkCard itemName={list[el].item_name} itemDesc={list[el].description} price={list[el].item_price} key={el}/>)
    }



    return (
        <div id='drinkShelf'>
           {drinkListEl} 
        </div>
    );
};

export default drinkDisplay;