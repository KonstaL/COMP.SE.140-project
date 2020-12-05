import isObject from '../comp.se.200-lib/src/isObject';

describe("isObject function", () => {
       test("isObject should return true when called with an object", () => {
        const input = {'a': 1};
        const result = isObject(input);
        expect(result).toBe(true);
    })

    test("isObject should return true when called with a function", () => {
        const input = () => 1;
        const result = isObject(input);
        expect(result).toBe(true);
    })

    test("isObject should return false when called with a nonObject", () => {
        const input = 1;
        const result = isObject(input);
        expect(result).toBe(false);
    })
})