import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import StoreDisplay from '../../components/displays/storeDisplay';
import CustomerNav from '../../components/navbar/customerNavBar'
import * as actions from '../../redux/reducers/actions'
import './customerHomepage.css'

const customerHomepage = () => {

    
    const storeList = useSelector(state => state.storeList)
    const isLoading = useSelector(state => state.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        //setStores()
        dispatch(actions.setStoresCreator())
    },[])


    return (
        <>
            <CustomerNav/>
            <div id='header'>
                <div id='currOrderBox'>
                    <h1>Current Order</h1>
                </div>
                <div id='membershipStatusBox'>
                    <h1>Remaining Drinks</h1>
                </div>
            </div>
                
            <div id='body'>
            { isLoading ? 
                (<h1> Loading... </h1>) : 
                (<StoreDisplay storeList = {storeList}/>)
            }  
            </div>
        </>
    );
};

export default customerHomepage;