import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';

import StoreContainer from '../../components/containers/storeContainer';
import store from '../../store';

import CustomerNavBar from './../../components/navbar/customerNavBar';

class housekeepingPage extends Component {



    render(){
            return (
        <div>
        <CustomerNavBar/>
        <Provider store = {store}>
               <StoreContainer/>        
        </Provider>

        </div>
    );
    }

};

export default housekeepingPage;