import castArray from "../comp.se.200-lib/src/castArray.js";

describe('castArray function', () => {
    test('castArray should return new array', () => {
        const a = 'string';
        const expectedResult = ['string'];
        expect(castArray(a)).toEqual(expectedResult);
    });

    test('castArray should return empty array', () => {
        const expectedResult = [];
        expect(castArray()).toEqual(expectedResult);
    });

    test('castArray should return array', () => {
        const a = [1,2,3];
        const expectedResult = [1,2,3];
        expect(castArray(a)).toEqual(expectedResult);
    });
});
