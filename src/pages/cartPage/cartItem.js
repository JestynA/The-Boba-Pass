import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions'
import './cartItem.css';

const cartItem = ({item, index}) => {

    const dispatch = useDispatch()

    const removeFromCart = () => {
        dispatch(actions.removeFromCartCreator(index))
    }
    return (
        <div id='cartItem'>
            <div id='name'>{item.item_name}</div>
            <div id='price'>{item.item_price} <button onClick={removeFromCart}>x</button></div>
        </div>
    );
};

export default cartItem;