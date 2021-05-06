import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Products } from "./products";
import { cartState } from "./cartstate";
import { createForms } from "react-redux-form";
import { initialShoppingformState } from './forms';
import { ProductVariation } from './variations';
import { customized } from './customize';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Items: Products,
            variation: ProductVariation,
            CartArr: cartState,
            customized: customized,
            ...createForms({
                shoppingForm: initialShoppingformState
            })
        }),
        applyMiddleware(thunk)
    );

    return store;
};