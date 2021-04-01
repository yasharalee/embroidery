
import { ITEMS } from '../shared/itemsarr';


export const Products = (state = {
                Items:ITEMS,
               
            }, action) => {
    switch (action.type) {
        default:
            return state;
    }
};