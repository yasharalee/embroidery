import * as ActionType from './actionTypes'

export const ProductVariation = (state = {
    variation: [],
    errMess: null,
    isLoading:true
}, action) => {
    switch (action.type) {
        case (ActionType.ADD_VAR):
            return { ...state, variation: action.payload, errMess:null, isLoading:false};
        case (ActionType.VAR_FAILED):
            return { ...state, errMess: action.payload, isLoading:false};
        case (ActionType.LOAD_VAR):
            return { ...state, errMess: null, isLoading: true };
        default:
            return state;
    }
};