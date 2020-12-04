import ceil from "../comp.se.200-lib/src/ceil.js";

describe('ceil function', () => {
    test('Ceil should round up to integer', () => {
        const a = 3.3;
        const expectedResult = 4;
        
        expect(ceil(a)).toBe(expectedResult);
    });

    test('Ceil should return same number', () => {
        const a = 5;
        const expectedResult = a;
        
        expect(ceil(a)).toBe(expectedResult);
    }); 

    
    test('Ceil with precision', () => {
        const a = 5.003;
        const b = 0.1;
        const expectedResult = 5.1;
        
        expect(ceil(a, b)).toBe(expectedResult);
    });

    test('Ceil function with negative precision', () => {
        const a = 1234.4;
        const b = -2;
        const expectedResult = 1300;
        
        expect(ceil(a, b)).toBe(expectedResult);
    });

    test('Ceil function with wrong inputs', () => {
        const a = 'one';
        const b = 'two';
        const expectedResult = NaN;
        
        expect(ceil(a, b)).toBe(expectedResult);
    });


});
