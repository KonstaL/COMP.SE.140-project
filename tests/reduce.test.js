import reduce from '../comp.se.200-lib/src/reduce';

describe("reduce function", () => {
    test("Reduce should return correct value with simple arary input", () => {
        const a = [1, 2, 3];
        const f = (pro, x) => (pro * x);
        const init = 1;
        const expectedResult = 6;
        const result = reduce(a, f, init);
        expect(result).toEqual(expectedResult);
    })

    test("Reduce should return correct value with simple object input", () => {
        const a = {'a': 1, 'b': 2, 'c': 3};
        const f = (res, val) => {
            if(res[val]) {
                res[val] = res[val]++;
            } else {
                res[val] = 1;
            }
                return res;
        };
        const init = {};
        const expectedResult = {'1': 1, '2': 1, '3': 1};
        const result = reduce(a, f, init);
        expect(result).toEqual(expectedResult);
    })
})