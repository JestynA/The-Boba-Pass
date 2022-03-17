import * as types from './actionTypes'

export const addStoreCreator = (storeInfo) => {
    return({
        type: types.ADD_STORE,
        payload: storeInfo
    })
}


export const addDrinkCreator = (drinkInfo) => {
    return({
        type: types.ADD_DRINK,
        payload: drinkInfo
    })
}


export const deleteStoreCreator = (address) => {
    return({
        type: types.DELETE_STORE,
        payload: address
    })
}


export const deleteDrinkCreator = (delDrinkInfo) => {
    return ({
        type: types.DELETE_DRINK,
        payload: delDrinkInfo
    })
}