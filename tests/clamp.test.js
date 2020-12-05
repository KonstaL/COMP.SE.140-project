import clamp from "../comp.se.200-lib/src/clamp.js";

describe('clamp function', () => {
    test('Clamp should return input if inside boundaries', () => {
        const num = 5;
        const lower = -10;
        const upper = 10;
        const expectedResult = num;
        
        expect(clamp(num, lower, upper)).toEqual(expectedResult);
    });

    test('Clamp should return number that equals lower boundary', () => {
        const num = -5;
        const lower = 0;
        const upper = 5;
        const expectedResult = lower;
        
        expect(clamp(num, lower, upper)).toEqual(expectedResult);
    }); 

    
    test('Clamp should return number that equals upper boundary', () => {
        const num = 10;
        const lower = 0;
        const upper = 5;
        const expectedResult = upper;
        
        expect(clamp(num, lower, upper)).toEqual(expectedResult);
    }); 

    test('Clamp should handle negative numbers', () => {
        const num = 10;
        const lower = -20;
        const upper = -10;
        const expectedResult = upper;
        
        expect(clamp(num, lower, upper)).toEqual(expectedResult);
    }); 


    test('Clamp should return NaN', () => {
        const num = 'number';
        const lower = -5;
        const upper = 5;
        const expectedResult = NaN;

        expect(clamp(num, lower, upper)).toEqual(expectedResult);
    });


     test('Clamp should return NaN with non number boundaries', () => {
        const num = 10;
        const lower = 'lower';
        const upper = 'upper'
        const expectedResult = NaN;

        expect(clamp(num, lower, upper)).toEqual(expectedResult);
    });

    test('Clamp should return NaN with reversed boundaries', () => {
        const num = 10;
        // lower and upper are mixed up. Since num isn't below lower or higher than upper, the response should be NaN.
        // Returning zero will cause more harm than good, since there isn't any immediate sign that the FN is misused.
        const lower = 5; 
        const upper = -5;
        const expectedResult = NaN;

        expect(clamp(num, lower, upper)).toEqual(expectedResult);
    });
    
});
