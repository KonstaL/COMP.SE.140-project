import filter from '../comp.se.200-lib/src/filter';

describe("filter function", () => {

    test("filter should return new array without filtered elements", () => {
        const array = [1, 'a', false, '', 4];
        const predicate = Boolean;
        const result = filter(array, Boolean);
        const expectedResult = [1, 'a', 4];
        expect(result.length).toBe(expectedResult.length);
        expect(result).toEqual(expectedResult);
    })

    test("filter should return an empty array when input is null", () => {
        const array = null;
        const predicate = Boolean;
        const result = filter(array, Boolean);
        const expectedResult = [];
        expect(result.length).toBe(expectedResult.length);
        expect(result).toEqual(expectedResult);
    })
})