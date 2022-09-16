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

let drinkList;
    
    switch(action.type){
        case types.ADD_STORE:
            let storeList;
            fetch('/db/createStore',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body : JSON.stringify(action.payload)
            })
            .then(res => console.log(res))


            storeList = state.storeList.map((el) => {return JSON.parse(JSON.stringify(el))})
            storeList.push(action.payload)

            //storeList = [...state.storeList, action.payload]


            return {
                ...state,
                storeList,
            }

            
        
        case types.ADD_DRINK:
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