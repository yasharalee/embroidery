import * as ActionType from './actionTypes'


export const customized = (state = {
    customized: [],
    myFile:  "/imgs/Image-Placeholder.jpg"
}, action) => {
    
    switch (action.type) {
        case (ActionType.ADD_TO_CUSTOMIZE):
            return { ...state, customized: state.customized.concat(action.payload) };
       
       
        case (ActionType.SEND_CUSTOM_IMAGE_TO_REDUCER):
            return { ...state, myFile: action.payload };
        
       
        case (ActionType.REMOVE_FROM_CUSTOMIZE):
            const tempArr = state.customized;
            const item = action.payload;
            const index = tempArr.indexOf(item);
            tempArr.splice(index, 1);
            return { ...state, customized: tempArr };
        
        
        case (ActionType.REMOVE_ALL_FROM_CUSTOMIZE):
            return { ...state, customized: state.customized.filter(itemToRemove => itemToRemove !== action.payload) };
        
       
        case (ActionType.ADD_MANUALL_NUMBER_TO_CUSTOM):
            const filterStateArr = state.customized.filter(eachitem => eachitem.id !== action.payload[0].id);
            const mergedArr = filterStateArr.concat(action.payload);
            return {...state, customized: mergedArr};
        
        default:
            return state;
    };
};