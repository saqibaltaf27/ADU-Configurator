import React from "react";
import { ConfigProvider } from "./context/ConfigContext";
import MaterialSelector from './components/MaterialSelector';
import StructureSelector from "./components/StructureSelector";
import PriceDisplay from "./components/PriceDisplay";
import ConfigActions from "./components/ConfigActions";

function App() {
  return (
    <ConfigProvider>
      <div style={{ padding: '20px', fontFamily: 'Arial'}}>
        <h1>Everglade Modular ADU Configurator</h1>
        <StructureSelector />
        <MaterialSelector />
        <PriceDisplay />
        <ConfigActions />
      </div>
    </ConfigProvider>
  );
}

export default App;