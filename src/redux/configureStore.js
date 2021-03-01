import {createStore} from 'redux';
import { reducer, initialstate  } from "./reducer";

export const ConfigureStore = () => {
    const store = createStore(
        reducer,
        initialstate
    );

    return store;
};