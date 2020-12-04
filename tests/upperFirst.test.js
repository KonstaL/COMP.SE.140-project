import upperFirst from '../comp.se.200-lib/src/upperFirst';

describe("upperFirst", () => {
    test("upperFirst should convert only the first letter to upper case", () => {
        const string = 'cApItal';
        const expectedResult = 'CApItal';
        const result = upperFirst(string);

        expect(result).toEqual(expectedResult);

    })
})