import React from 'react';
import { connect , useSelector} from 'react-redux';
import CustomerNavBar from './../../components/navbar/customerNavBar';
import './cartPage.css';
import CartItem from './cartItem';

const cartPage = () => {

    const cart = useSelector(state => state.cartReducer.cart)
    let total = 0

    const cartListEl = cart.map((item, index) => {
        total += item.item_price
        return (
            <CartItem item = {item} key = {index} index = {index}/>
        )
    });


    return (
        <>
            <CustomerNavBar/>
            <div id='cartShelf'>
                <div id='cartBox'>
                    <h1>Cart</h1>
                    {cartListEl}
                    <div id='totals'>
                        <hr></hr>
                        Total: {total.toFixed(2)} 
                        <br></br>
                        <hr></hr>
                        Total Drinks: {cart.length}
                    </div>   
                </div>
            </div>
        </>
    );
};

export default cartPage;