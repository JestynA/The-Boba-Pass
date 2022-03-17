import React from 'react';
import { Provider } from 'react-redux';
import StoreContainer from '../../components/containers/storeContainer';
import store from '../../store';





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
            <Provider store={store}>

            </Provider>
            
            </div>
        </div>
    );
};

export default login;