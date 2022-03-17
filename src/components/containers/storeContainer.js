import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from '../../../server/routes';
import * as actions from './../reducers/actions'

import StoreCreator from '../creators/storeCreator';

const mapStateToProps = state => {
    return({
        totalStores: state.totalStores,
        storeList: state.storeList
    })
}

const mapDispatchToProps = dispatch => {
    return {
        addStore : (name) => dispatch(actions.addStoreCreator(name)),
        addDrink : (name, desc) => dispatch(actions.addDrinkCreator(name, desc)),
        deleteStore : (name) => dispatch(actions.deleteStoreCreator(name)),
        deleteDrink : (name) => dispatch(actions.deleteDrinkCreator(name))
    }
}

class storeContainer extends Component {
constructor(props){
    super(props);
}

    render(){
        return (
        <div>
            <h1>Stores</h1> 
            
            <StoreCreator addStore={this.props.addStore} deleteStore={this.props.deleteStore} />
        </div>
    ); 
    }
   
};

export default connect(mapDispatchToProps,mapDispatchToProps)(storeContainer);