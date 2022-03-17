import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { render } from '../../../server/routes';
import * as actions from './../reducers/actions'

import StoreCreator from '../creators/storeCreator';

import './storeContainer.css'

const mapStateToProps = state => {
    return({
        totalStores: state.totalStores,
        storeList: state.storeList
    })
}

const mapDispatchToProps = dispatch => {
    return {
        addStore : (storeInfo) => dispatch(actions.addStoreCreator(storeInfo)),
        addDrink : (name, desc) => dispatch(actions.addDrinkCreator(name, desc)),
        deleteStore : (address) => dispatch(actions.deleteStoreCreator(address)),
        deleteDrink : (name) => dispatch(actions.deleteDrinkCreator(name))
    }
}

class storeContainer extends Component {
constructor(props){
    super(props);
}

    render(){
        return (
        <div id='storeContainer'>
            
            <StoreCreator addStore={this.props.addStore} deleteStore={this.props.deleteStore} />
        </div>
    ); 
    }
   
};

export default connect(mapStateToProps,mapDispatchToProps)(storeContainer);