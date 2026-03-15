# Everglade Modular ADU Configurator

# Requirements

1. Functional Prototype
    - Must handle a large dataset: 1000+ mock material variations.
    - Support 50+ structural permutations.
    - Real-time price estimation with seamless UI updates.

2. Performance Audit & Optimization
    - Identify bottlenecks in state management and rendering.
    - Price calculation and UI updates must happen under 100ms.
    - Use efficient data handling, memoization, and debouncing.
    - Prevent unnecessary re-renders using React.memo / useMemo

3. Resource Management
    - Load high-resolution product images or SVGs lazily.
    - Prevent layout shifts during selections.
    - Ensure the UI remains smooth when toggling hundreds of options.

4. Lead Recovery
    - `Save Configuration` and `Request Quote` functions must be instantaneous.
    - Include robust error handling for slow/spottyl mobile connections.


## Deliverables
1. ZIP file: The complete source code of the optimized configurator.
2. Public GitHub Repository: A public repo containing the code and a README detailing the optimization techniques used (e.g., memoization, lazy loading, debouncing).
3. Deployed Demo: A live link (Vercel, Netlify, or GitHub Pages) showcasing the smooth performance of the configurator.
4. Performance Report: A PDF or Markdown file comparing "Before" and "After" performance metrics (using Lighthouse or Chrome DevTools).
5. Screen Recording: A video demonstrating the tool's responsiveness under heavy load.