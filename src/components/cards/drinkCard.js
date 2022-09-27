import React from 'react';
import { useDispatch } from 'react-redux';
import './drinkCard.css'
import * as actions from '../../redux/actions'

const drinkCard = ({drink}) => {

    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(actions.addToCartCreator(drink))
    }

    return (
        <button id='drinkButton' onClick={handleClick}>
            <div id='drinkCard'>          
                <h1 id='drinkName'>{drink.item_name}</h1>
                <h3 id='drinkDesc'>{drink.description}</h3>    
                <p id='drinkPrice'>{drink.item_price}</p>    
            </div>
        </button>
    );
};

export default drinkCard;