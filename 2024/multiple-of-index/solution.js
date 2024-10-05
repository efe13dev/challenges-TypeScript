export function multipleOfIndex(array) {
    // Filtra los elementos que son múltiplos de su propio índice
    const result = array.filter((value, index) => (index !== 0 && value % index === 0) || value === 0);
    return result;
}
console.log(multipleOfIndex([0, 2, 3, 6, 9]));
