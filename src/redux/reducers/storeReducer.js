import { FaLaptopHouse } from 'react-icons/fa'
import * as types from './actionTypes'

const initialState = {
    loading: false,
    error: '',
    storeList : [],
    drinkList: []
}

const storeReducer = (state = initialState, action) => {

    switch(action.type){
        case types.SET_STORES_REQUEST: 
        console.log('loading stores')
            return {
                ...state,
                loading: true
            }
        case types.SET_STORES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                storeList: action.payload
            }
        case types.SET_STORES_FAILURE:
            return {
                ...state,
                loading: false,
                storeList: [],
                error: action.payload
            }
        case types.ADD_STORE:
            let storeList;
            storeList = state.storeList.map((el) => {return JSON.parse(JSON.stringify(el))})
            storeList.push(action.payload)
            return {
                ...state,
                storeList,
            }
        case types.ADD_DRINK:
            let drinkList;
            fetch('/db/addDrink',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body : JSON.stringify(action.payload)
            })
            .then( res => console.log(res))

            drinkList = state.drinkList.map((el) => {return JSON.parse(JSON.stringify(el))})
            drinkList.push(action.payload);
            
            return{
                ...state,
                drinkList,
            }



        case types.DELETE_STORE:
            const delInfo = {address : action.payload}
            fetch('/db/deleteStore',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(delInfo)
            })
            .then( res => console.log(res))

            return{
                ...state
            }


        case types.DELETE_DRINK:
            fetch('/db/deleteDrink',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(action.payload)
            })
            .then( res => console.log(res))
            
            return{
                ...state
            }

        default: return state;
    }
}

export default storeReducer;