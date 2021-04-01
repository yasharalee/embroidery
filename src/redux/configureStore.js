import { createStore, combineReducers  } from 'redux';
import { Products } from "./products";
import { cartState } from "./cartstate";
import { createForms } from "react-redux-form";
import { initialShoppingformState } from './forms';
import { ProductVariation } from './variations';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Items: Products,
            variation:ProductVariation,
            CartArr: cartState,
            ...createForms({
                shoppingForm : initialShoppingformState
            })
        })
    );

    return store;
};