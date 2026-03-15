export function calculateTotalPrice(structure, materials) {
    if(!structure) return 0;
    const materialsCost = materials.reduce((sum, m) => sum + m.price, 0);

    return structure.basePrice + materialsCost;
}