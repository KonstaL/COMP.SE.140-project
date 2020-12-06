import drop from "../comp.se.200-lib/src/drop.js";

describe('drop fn', () => {
    test('Drop should drop only the first value', () => {
        const a = [1,2,3,4,5];
        const expectedResult = [2,3,4,5];
        expect(drop(a)).toEqual(expectedResult);
    });

    test('Drop should return empty array', () => {
        const array = [1,2,3,4,5];
        const number = 6;
        const expectedResult = [];

        expect(drop(array, number)).toEqual(expectedResult);
    });

    test('Drop should return untouched array', () => {
        const array = [1,4,5,6];
        const number = 0;
        const expectedResult = array;

        expect(drop(array, number)).toEqual(expectedResult);
    });


    test('Drop from empty array', () => {
        const array = [];
        const number = 2;
        const expectedResult = array;

        expect(drop(array, number)).toEqual(expectedResult);
    });

    test('drop from null array', () => {
        const array = null;
        const number = 2;

        const fnCall = () => drop(array, number);

        expect(fnCall).toThrow();
    });


    test('drop with negative number', () => {
        const array = [1,2,3];
        const number = -2;

        const fnCall = () => drop(array, number);

        expect(fnCall).toThrow();
    });
});
