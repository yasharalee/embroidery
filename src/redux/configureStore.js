import { createStore, combineReducers  } from 'redux';
import { Products } from "./products";
import { cartState } from "./cartstate";


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Items: Products,
            CartArr: cartState
        })
    );

    return store;
};