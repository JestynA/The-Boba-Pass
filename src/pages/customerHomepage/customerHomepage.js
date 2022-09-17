import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import StoreDisplay from '../../components/displays/storeDisplay';
import CustomerNav from '../../components/navbar/customerNavBar'
import * as actions from '../../redux/reducers/actions'


import './customerHomepage.css'

const mapStateToProps = state => {
    return ({
        stores: state.storeList
    })
}

const mapDispatchToProps = dispatch => {
    return {
        setStores : () => dispatch(actions.setStoresCreator())
    }
}



const customerHomepage = ({setStores, stores}) => {
    // const stores = useSelector( state => state.storeList)
    // //let stores = props.storeList
    // const dispatch = useDispatch()
    const storeList = useSelector(state => state.storeList)
    console.log('stores:', storeList)



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
                    <StoreDisplay storeList = {storeList}/>
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(customerHomepage);