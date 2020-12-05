import slice from '../comp.se.200-lib/src/slice';

describe("slice function", () => {
    test("Slice should return an array between given boundaries", () => {
        const end = 4;
        const start = 2;
        const a = [1, 2, 3, 4];
        const expectedResult = [3];
        const result = slice(a, start, end);
        expect(result.length).toBe(expectedResult.length)
        expect(result).toBe(expect.arrayContaining(expectedResult));
    })

    test("Slice should return given array if there are now boundaries", () => {
        const a = [1, 2, 3, 4];
        const expectedResult = [1, 2, 3, 4];
        const result = slice(a);
        expect(result.length).toBe(expectedResult.length)
        expect(result).toEqual(expect.arrayContaining(expectedResult));
    })

    test("Slice should return given array if array is empty", () => {
        const a = [];
        const expectedResult = [];
        const result = slice(a);
        expect(result.length).toBe(expectedResult.length)
        expect(result).toEqual(expect.arrayContaining(expectedResult));
    })
    
    test("Slice should return treat negative parameters as offsets", () => {
        const start = 0;
        const end = -1;
        const a = [1, 2, 3, 4];
        const expectedResult = [1, 2, 3];
        const result = slice(a, start, end);
        expect(result.length).toBe(expectedResult.length)
        expect(result).toEqual(expect.arrayContaining(expectedResult));
    })
    
    test("Slice should return treat negative parameters as offsets", () => {
        const start = -1;
        const a = [1, 2, 3, 4];
        const expectedResult = [1, 2, 3];
        const result = slice(a, start);
        expect(result.length).toBe(expectedResult.length)
        expect(result).toEqual(expect.arrayContaining(expectedResult));
    })

    test("Slice should return empty array when given array is null", () => {
        const a = null;
        const expectedResult = [];
        const result = slice(a);
        expect(result.length).toBe(expectedResult.length)
        expect(result).toEqual(expect.arrayContaining(expectedResult));
    })

    test("Slice should return empty array when given array is null", () => {
        const start = -5;
        const end = undefined;
        const a = [1, 2, 3, 4];
        const expectedResult = [1, 2, 3, 4];
        const result = slice(a, start, end);
        expect(result.length).toBe(expectedResult.length)
        expect(result).toEqual(expect.arrayContaining(expectedResult));
     })

})