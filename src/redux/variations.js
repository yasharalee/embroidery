import { VARIATIONSOFITEMS } from '../shared/variationofitems';

export const ProductVariation = (state = {
    variation: VARIATIONSOFITEMS
}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};