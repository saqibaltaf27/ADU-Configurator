import React, { useEffect} from "react";
import { useConfig } from "../context/ConfigContext";
import { calculateTotalPrice } from '../utils/priceCalculator';

const PriceDisplay = () => {

    const { state, dispatch } = useConfig();

    useEffect(() => {
        const total = calculateTotalPrice(state.selectedStructure, state.selectedMaterials);
        dispatch({
            type: 'SET_TOTAL_PRICE',
            payload: total
        });
    }, [state.selectedMaterials, state.selectedStructure, dispatch]);

    return <h2>Total Price: ${state.totalPrice}</h2>;
};

export default PriceDisplay;