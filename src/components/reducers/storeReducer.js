// import { bindActionCreators } from "redux";
import * as types from './actionTypes'

// import db from './../../../server/models/database'

const initialState = {
    totalStores: 0,
    storeList : {},
}

// storeList
// storeName: name
// storeDesc: desc
// drinks: {milktea:desc}
// address: {city: Chino Hills, address: 360 noscope ave, zip: 91709}

const storeReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_STORE:
            
        
        case types.ADD_DRINK:




        case types.DELETE_STORE:


        case types.DELETE_DRINK:

        default: return state;
    }
}

export default storeReducer;