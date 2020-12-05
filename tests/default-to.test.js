import defaultTo from "../comp.se.200-lib/src/defaultTo.js";

describe('defaultTo fn', () => {
    test('defaultTo should return given value', () => {
        const value = 10;
        const defaultValue = 0;
        const expectedResult = 10;
        
        expect(defaultTo(value, defaultValue)).toEqual(expectedResult);
    });

    test('defaultTo should return default value', () => {
        const value = undefined;
        const defaultValue = 3;
        const expectedResult = defaultValue;
        
        expect(defaultTo(value, defaultValue)).toEqual(expectedResult);
    });
});
