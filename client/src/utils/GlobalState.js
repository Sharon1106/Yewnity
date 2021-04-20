import React, { createContext, useReducer, useContext } from "react";
import { ADD_USER } from "./actions";


const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [action.post, ...state.posts],
                loading: false
            }

        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        users: [],
    });
    return <Provider value={[state, dispatch]} {...props} />
};

