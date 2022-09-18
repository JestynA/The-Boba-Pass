import * as types from '../actionTypes'

const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case types.ADD_TO_CART:
            const newCart = state.cart.slice()
            newCart.push(action.payload)
            return {
                cart: newCart
            }
        case types.REMOVE_FROM_CART:
            const cart = state.cart.slice()
            cart.splice(action.payload, 1)
            return {
                cart,
            }
        default: 
            return state
    }
}

export default cartReducer