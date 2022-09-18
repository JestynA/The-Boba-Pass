import * as types from './actionTypes'

export const setStoresCreator = () => {

    // thunk, does not need to be pure
    return (dispatch) => {
        dispatch(setStoresRequest())
        fetch('/db/getStores',{
            method: 'GET',
        })
        .then(data => data.json())
        .then(res => {
            dispatch(setStoresSuccess(res))
        })
        .catch(err => {
            const errorMsg = err.message
            dispatch(setStoresFailure(errorMsg))
        })
    }
}

const setStoresRequest = () => {
    return {
        type: types.SET_STORES_REQUEST
    }
}

const setStoresSuccess = (stores) => {
    return {
        type: types.SET_STORES_SUCCESS,
        payload: stores
    }
}

const setStoresFailure = (err) => {
    return {
        type: types.SET_STORES_FAILURE,
        payload: err
    }
}

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