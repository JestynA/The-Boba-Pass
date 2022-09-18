import React from 'react';
import { connect } from 'react-redux';
import CustomerNavBar from './../../components/navbar/customerNavBar';
import './cartPage.css';
import CartItem from './cartItem';

const mapStateToProps = state => {
    return ({
        cart: state.cart
    })
}

const cartPage = (props) => {
    console.log(props.cart)

    const cartList = props.cart;
    const cartListEl = [];
    let total = 0;
    //const totalDrinks = cartList.length;
    for(const el in cartList){
        cartListEl.push(<CartItem name={cartList[el].name} price={cartList[el].price} key={el}/>);
        total += cartList[el].price;
    
    }
    

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
                        Total Drinks: {}
                    </div>   
                </div>
            </div>
        </>
    );
};

export default connect(mapStateToProps)(cartPage);