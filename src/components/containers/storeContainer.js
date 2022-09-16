import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        deleteStore : (address) => dispatch(actions.deleteStoreCreator(address)),
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