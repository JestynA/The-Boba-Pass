import * as types from './actionTypes'

const initialState = {
    storeList : [],
    drinkList: []
}

// storeList
// storeName: name
// storeDesc: desc
// drinks: {milktea:desc}
// address: {city: Chino Hills, address: 360 noscope ave, zip: 91709}

const storeReducer = (state = initialState, action) => {

    switch(action.type){
        case types.ADD_STORE:
            let storeList;
            storeList = state.storeList.map((el) => {return JSON.parse(JSON.stringify(el))})
            storeList.push(action.payload)

            console.log('state', state)
            const test = [...state.storeList, action.payload]
            console.log('here is reducer', test)

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