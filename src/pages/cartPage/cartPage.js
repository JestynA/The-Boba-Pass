import React from 'react';
import CustomerNavBar from './../../components/navbar/customerNavBar';

import './cartPage.css';

import CartItem from './cartItem';

const cartPage = (props) => {
    console.log(props.cart)

    const cartList = props.cart;
    const cartListEl = [];
    let total = 0;
    const totalDrinks = cartList.length;
    for(const el in cartList){
        cartListEl.push(<CartItem name={cartList[el].name} price={cartList[el].price} key={el}/>);
        total += cartList[el].price;
    
    }
    

    return (
        <div>
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
                Total Drinks: {totalDrinks}
                </div>   
                </div>

            </div>

            
            


        </div>
    );
};

export default cartPage;