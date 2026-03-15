import React, { createContext, useReducer, useContext, useMemo} from "react";

const ConfigContext = createContext();

const initialState = {
    selectedMaterials: [],
    selectedStructure: null,
    totalPrice: 0
};

function reducer(state, action) {
    switch(action.type) {
        case 'SET_STRUCTURE':
            return {
                ...state,
                selectedStructure: action.payload
            };

        case 'SET_MATERIALS':
            return {
                ...state,
                selectedMaterials: action.payload
            };

        case 'SET_TOTAL_PRICE':
            return {
                ...state,
                totalPrice: action.payload
            }

        default:
            return state;
    }
}


export function ConfigProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = useMemo(() => ({
        state, dispatch
    }), [state]);

    return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useConfig() {
    return useContext(ConfigContext)
}