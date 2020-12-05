import defaultToAny from "../comp.se.200-lib/src/defaultToAny.js";

describe('defaultToAny fn', () => {
    test('defaultToAny should return first acceptable value', () => {
        const value = [NaN, undefined, null, 'accept'];
        const expectedResult = 'accept';
        
        expect(defaultToAny(...value)).toEqual(expectedResult);
    });

    test('defaultToAny should return last value', () => {
        const value = [null, undefined, NaN, undefined];
        const expectedResult = undefined;
        
        expect(defaultToAny(...value)).toEqual(expectedResult);
    });
});
