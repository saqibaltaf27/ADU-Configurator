import React , { useState, useEffect, memo} from "react";
import { useConfig } from '../context/ConfigContext';
import useDebounce from '../hooks/useDebounce';
import materialsData from '../data/materials.json';

const MaterialSelector = () => {

    const {state, dispatch} = useConfig();
    const [selected, setSelected] = useState([]);
    const debouncedSelected = useDebounce(selected, 100);

    useEffect(() => {
        dispatch({ 
            type: 'SET_MATERIALS',
            payload: debouncedSelected
        });
    }, [debouncedSelected, dispatch]);


    const toggleMaterial = (material) => {
        setSelected((prev) => prev.find((m) => m.id === material.id)
                    ? prev.filter((m) => m.id !== material.id) : [...prev, material] );
    };

    return (
        <div>
            <h3>Select Materials</h3>
            <div style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'}}>

                {materialsData.map((m) => (
                    <div
                    key={m.id}
                    onClick={() => toggleMaterial(m)}
                    style={{
                        border: selected.includes(m) ? '2px solid green' : '1px solid gray',
                        padding: '10px',
                        cursor: 'pointer'
                    }}
                    >

                    <img src={m.image} alt={m.name}
                    width={60} height={60} loading="lazy" />
                    <p>{m.name}</p>
                    <p>{m.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default memo(MaterialSelector);
