import { bindActionCreators } from "redux";
import * as types from './actionTypes'

import db from './../../../server/models/database';

const initialState = {
    totalStores: 0,
    storeList : {},
}

// storeList
// storeName: name
// storeDesc: desc
// drinks: {milktea:desc}

const storeReducer = (state = initialState, action) => {
    switch(action.types){
        case types.ADD_STORE:

        
        case types.ADD_DRINK:




        case types.DELETE_STORE:


        case types.DELETE_DRINK:
    }
}

export default storeReducer;