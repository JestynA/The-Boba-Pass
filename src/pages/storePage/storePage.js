import React , { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CustomerNavBar from './../../components/navbar/customerNavBar'

import './storePage.css'


import DrinkDisplay from '../../components/displays/drinkDisplay';

import Tastea from './../../../assets/pics/locations/storePics/Tastea.png'
import bobaFiend from './../../../assets/pics/locations/storePics/BobaFiend.jpg'
import dingTea from './../../../assets/pics/locations/storePics/dingTea.jpg'
import roastingWater from './../../../assets/pics/locations/storePics/RoastingWater.jpg'
import tigerSugar from './../../../assets/pics/locations/storePics/Tiger Sugar.jpg'

const vendorPics = {
    'Tastea' : Tastea,
    'Tiger Sugar' : tigerSugar,
    'Boba Fiend' : bobaFiend,
    'Ding Tea' : dingTea,
    'Roasting Water' : roastingWater
    
    }
const storePage = (props) => {

    //console.log(props.cart)

    const params = useParams();
    // console.log(params)
    const [state, setState] = useState({
        drinks: null,
    })

    // let drinkList;
    // const drinkListEl = [];

    useEffect(() => {
        

        fetch('/db/getDrinks',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body : JSON.stringify({vendorId: params.id})
        })
        .then(data => data.json())
        .then(data => {
            setState({drinks: data})

        })

    },[])



    return (
        <div id='storePage'>
        <CustomerNavBar/>
            <div id='header'>
                 <img id ='storeImg' src={vendorPics[params.storeName]}></img>
                
            </div>
            
            <div>
              <h1>{params.storeName}</h1>  
            </div>
            
            <div id='drinksBox'>
                <DrinkDisplay updateCart={props.updateCart} cart={props.cart} drinkList={state.drinks}/>
            </div>
        </div>
    );
};

export default storePage;