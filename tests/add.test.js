import  add from "../comp.se.200-lib/src/add.js";

describe('Add function', () => {
    test('Add with positive integers', () => {
        const result = add(4,6);
        expect(result).toBe(10);
    });

    test('Add positive to negative number', () => {
        const result = add(2, -1.5);
        expect(result).toBe(0.5);
    });


    test('Add with inputs that are not numbers', () => {
        const result = add('string', ['a', 'b', 'c']);
        expect(result).toBe(NaN);
    });
});
