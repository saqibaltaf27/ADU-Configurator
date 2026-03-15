# Everglade Modular ADU Configurator

## Overview
The Everglade Modular ADU Configurator is a hihg-performance web tool that allows clients to configure luxury Accessory Dwelling Units (ADUs). Users can select from hundreds of materials, multiple structural layouts, and energy-efficient upgrades, while receiving a real-time price estimate.

This project focuses on **performance optimization**, ensuring a seamless premium experience for the end user.

---

## Features
- Support **1000+ material variations** and **50+ structural permutations**
- Real-time price calculation under **100ms**
- Lazy-loaded high-resolution images to prevent layout shift
- Memoized components and debounced selection updates
- Instant `Save Configuration` and `Request Quote` actions with robust error handling
- Fully responsive and optimized for mobile.

## Installation & Run

# Clone Repository
https://github.com/saqibaltaf27/ADU-Configurator.git

# Install Dependencies
npm install

# Start Development Server
npm run dev

---

## Performance Optimizations
- Memoization: React.memo and useMemo prevent unnecessary re-renders.
- Debouncing: Selection Changes are debounced to avoid frequent state updates.
- Lazy Loading: Images use loading='lazy' for faster initial rendering
- Efficient Price Calculation: Reduced computation to a single reduce call per selection
- Optimized State Management: React context with useReduces ensures clean, scalable architecture.

## Components
- MaterialSelector: Multi-select for hundreds of material options
- StructureSelector: DropDown for structural layout selection
- PriceDisplay: Shows total price dynamically
- ConfigActions: 'Save Configuration' and 'Request Quote' actions
- ConfigContext: Global State management

## Deployment
1. Github (https://github.com/saqibaltaf27/ADU-Configurator.git)
2. Vercel (https://adu-configurator-three.vercel.app/)