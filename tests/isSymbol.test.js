import isSymbol from '../comp.se.200-lib/src/isSymbol';

describe("isSymbol function", () => {
    test("isSymbol should return true if called with symbol primitive", () => {
        const input = Symbol('a');
        const result = isSymbol(input);
        expect(result).toBe(true);
    })

    test("isSymbol should return true if called with object that is symbol", () => {
        const input = Object(Symbol('a'));
        const result = isSymbol(input);
        expect(result).toBe(true);
    })

    test("isSymbol should return false if called with any other value", () => {
        const input = 'a';
        const result = isSymbol(input);
        expect(result).toBe(false);
    })
})