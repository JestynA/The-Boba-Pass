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
        default: 
            return state
    }
}

export default cartReducer