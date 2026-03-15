import React, { memo } from "react";
import { useConfig } from '../context/ConfigContext';
import structuresData from '../data/structures.json';

const StructureSelector = () => {

    const { state, dispatch} = useConfig();

    return (
        <div>
            <h3>Select Structure</h3>
            <select value={state.selectedStructure?.id || ''}
            onChange={(e) => {
                const structure = structuresData.find((s) => s.id === parseInt(e.target.value));
                dispatch({
                    type: 'SET_STRUCTURE',
                    payload: structure
                });
            }}
            >
            <option value="">Select Structure</option>
            {structuresData.map((s) => (
                <option key={s.id} value={s.id}>
                    {s.name} - ${s.basePrice}
                </option>
            ))}
            </select>
        </div>
    );
};

export default memo(StructureSelector);
