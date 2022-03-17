import * as types from './actionTypes'

export const addStoreCreator = (storeInfo) => {
    return({
        type: types.ADD_STORE,
        payload: storeInfo
    })
}


export const addDrinkCreator = (name, description) => {
    return({
        type: types.ADD_DRINK,
        namePayload: name,
        descPayload: description
    })
}


export const deleteStoreCreator = (name) => {
    return({
        type: types.DELETE_STORE,
        payload: name
    })
}


export const deleteDrinkCreator = (name) => {
    return ({
        type: types.DELETE_DRINK,
        payload: name
    })
}