
import * as ActionTypes from './actionTypes'

export const addToCart = (item) => ({
    type: ActionTypes.ADD_TO_CART,
    payload: item
});
