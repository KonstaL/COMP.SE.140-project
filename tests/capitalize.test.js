import capitalize from "../comp.se.200-lib/src/capitalize.js";

describe('capitalize function', () => {
    test('Capitalize should capitalize first letter', () => {
        const a = 'sTrinG';
        const expectedResult = "String";
        
        expect(capitalize(a)).toBe(expectedResult);
    });
});
