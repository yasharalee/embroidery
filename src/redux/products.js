

import * as ActionType from './actionTypes'


export const Products = (state = {
    Items: [],
    errMess: null,
    isLoading:true
               
            }, action) => {
    switch (action.type) {
        case (ActionType.ADD_ITEMS):
            return { ...state, Items: action.payload, errMess:null, isLoading:false};
        case (ActionType.ITEMS_FAILED):
            return { ...state, errMess: action.payload, isLoading:false};
        case (ActionType.LOAD_ITEMS):
            return { ...state, errMess: null, isLoading: true };
        default:
            return state;
    }
};