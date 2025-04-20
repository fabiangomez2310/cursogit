import restar from '../src/operaciones/resta.js';

test('resta 5-2 debe ser 3', () => {
    expect (restar(5,2)).toBe(3);
});