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
            fetch('/db/createStore',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body : JSON.stringify(action.payload)
            })
            .then(res => console.log(res))
        
        case types.ADD_DRINK:




        case types.DELETE_STORE:
            console.log('indisde reducer')
            const delInfo = {address : action.payload}
            fetch('/db/deleteStore',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(delInfo)
            })
            .then( res => console.log(res))


        case types.DELETE_DRINK:

        default: return state;
    }
}

export default storeReducer;