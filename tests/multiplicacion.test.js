import multiplicar from '../src/operaciones/multiplicacion.js';

test('multiplica 3 por 3 debe ser 9', () => {
    expect (multiplicar(3,3)).toBe(9);
})