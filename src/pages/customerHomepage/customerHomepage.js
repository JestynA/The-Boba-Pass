import React from 'react';
import StoreContainer from '../../components/containers/storeContainer';


import storeContainer from '../../components/containers/storeContainer';



import CustomerNav from '../../components/navbar/customerNavBar'

const login = () => {
    return (
        <div>
        <CustomerNav/>
            <div id='header'>

                <div id='currOrderBox'>

                </div>
                <div id='membershipStatusBox'>

                </div>

            </div>
                
            <div id='body'>
            <StoreContainer/>
            </div>
        </div>
    );
};

export default login;