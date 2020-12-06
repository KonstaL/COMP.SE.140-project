import map from '../comp.se.200-lib/src/map';

describe("map fuction", () => {
    test("map should return array where operations are done for each element", () => {
        const a = [1, 2, 3];
        const f = (x) => x * 2;
        const result = map(a, f);
        const expectedResult = [2, 4, 6];
        expect(result).toEqual((expectedResult));
    
    })

    test("map should return original array if there is an error", () => {
        const a = [1, 2, 3];
        const f = (x) => x.length;
        const result = map(a, f);
        expect(a).toEqual([1, 2, 3]);    
    })

    
    test("map should return an empty array if input is null", () => {
        const a = null;
        const f = (x) => x * 2;
        const result = map(a, f);
        expect(result).toEqual([]);    
    })

    

})