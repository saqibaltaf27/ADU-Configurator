import React, {memo} from "react";
import { useConfig } from "../context/ConfigContext";

const ConfigActions = () => {

    const { state } = useConfig();

    const saveConfig = async () => {
        try {
            await fetch('/api/saveConfig', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
            });
            alert('Configuration Saved');
        } catch (err) {
            alert('Failed to save. Please check your connection', err);
        }
    };

    const requestQuote = async () => {
        try {
            await fetch('/api/requestQuote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(state)
            });
            alert('Quote Requested!');
        } catch (err) {
            alert('Failed to request quote. Please try again', err);
        }
    };

    return (
        <div>
            <button onClick={saveConfig}>Save Configuration</button>
            <button onClick={requestQuote}>Request Quote</button>
        </div>
    );
};

export default memo(ConfigActions);
