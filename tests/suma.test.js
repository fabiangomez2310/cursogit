import sumar from '../src/operaciones/suma.js';

test('suma 2 + 3 debe ser 5', () => {
    expect(sumar(2,3)).toBe(5);
});