import * as ActionType from './actionTypes'


export const customized = (state = {
                            customized: []
                            }, action) => {
    switch (action.type) {
        case (ActionType.ADD_TO_CUSTOMIZE):
            return { ...state,  customized: state.customized.concat(action.payload)};
        default:
            return state;
    }
};