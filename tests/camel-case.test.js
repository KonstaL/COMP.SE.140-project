import camelCase from "../comp.se.200-lib/src/camelCase.js";

describe('camelCase function', () => {
    test('CamelCase function should convert string to camel case', () => {
        const a = 'camel case';
        const expectedResult = "camelCase";
        
        expect(camelCase(a)).toBe(expectedResult);
    });

    test('CamelCase function should return string as it was', () => {
        const a = 'string';
        const expectedResult = "string";
        
        expect(camelCase(a)).toBe(expectedResult);
    });
});
