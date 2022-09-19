import * as types from '../actionTypes'

const initialState = {
    loading: false,
    error: '',
    drinkList: [],
}

const storeReducer = (state = initialState, action) => {

    switch(action.type){
        case types.ADD_STORE:
            let storeList;
            storeList = state.storeList.map((el) => {return JSON.parse(JSON.stringify(el))})
            storeList.push(action.payload)
            return {
                ...state,
                storeList,
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


        default: return state;
    }
}

export default storeReducer;