
import { baseUrl } from '../shared/baseUrl';

import * as ActionTypes from './actionTypes'


export const fetchItems = () => (dispatch) => {
    return fetch(baseUrl + 'ITEMS')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                console.log(error);
                throw errMess;
            }
      
        )
        .then(response => response.json())
        .then(ITEMS => dispatch(addItems(ITEMS)))
        .catch(error => dispatch(itemFailed(error.message)))
};


export const addItems = (ITEMS) => ({
    type: ActionTypes.ADD_ITEMS,
    payload: ITEMS
});

export const ItemisLoading = () => ({
    type: ActionTypes.LOAD_ITEMS
});


export const itemFailed = (errMess) => ({
    type: ActionTypes.ITEMS_FAILED,
    payload: errMess
});


export const fetchvar = () => (dispatch) => {
    return fetch(baseUrl + 'VARIATIONSOFITEMS')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
            error => {
                const errMess = new Error(error.message);
                console.log(error);
                throw errMess;
            }
      
        )
        .then(response => response.json())
        .then(VARIATIONSOFITEMS => dispatch(addvar(VARIATIONSOFITEMS)))
        .catch(error => dispatch(varFailed(error.message)))
};


export const addvar = (VARIATIONSOFITEMS) => ({
    type: ActionTypes.ADD_VAR,
    payload: VARIATIONSOFITEMS
});

export const varisLoading = () => ({
    type: ActionTypes.LOAD_VAR
});


export const varFailed = (errMess) => ({
    type: ActionTypes.VAR_FAILED,
    payload: errMess
});


export const addToCart = (item) => ({
    type: ActionTypes.ADD_TO_CART,
    payload: item
});

export const addtocustomize = (item) => ({
    type: ActionTypes.ADD_TO_CUSTOMIZE,
    payload: item
});
