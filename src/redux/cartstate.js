import * as ActionTypes from './actionTypes'



const CartArr = [];

export const cartState = (state = {
                              CartArr
                                }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            const item = action.payload;
            return { ...state,  CartArr: state.CartArr.concat(item) };
        default:
            return state;
    }
};