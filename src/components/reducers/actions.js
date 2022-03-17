import * as types from './actionTypes'

export const addStoreCreator = (name) => {
    return({
        type: types.ADD_STORE,
        payload: name
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