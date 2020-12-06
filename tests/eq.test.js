import eq from '../comp.se.200-lib/src/eq';

describe("eq function", () => {
    test("eq should return true when comparing same value", () => {
        const a = {'a': 1};
        const result = eq(a,a);
        expect(result).toBe(true);
    })

    test("eq should return false when comparing objects that are not the same instance", () => {
        const a = {'a': 1};
        const b = {'a': 1};
        const result = eq(a,b);
        expect(result).toBe(false);
    })
    
    test("eq should return true when comparing two NaNs", () => {
        const result = eq(NaN, NaN);
        expect(result).toBe(true);
    })

})