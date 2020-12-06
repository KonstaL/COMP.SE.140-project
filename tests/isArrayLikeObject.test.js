import isArrayLikeObject from '../comp.se.200-lib/src/isArrayLikeObject';

describe("isArrayLikeObject function", () => {
    test("isArrayLikeObject should return false when input is a string", () => {
        const s = "asd";
        const result = isArrayLikeObject(s);
        expect(result).toBe(false);
    })

    test("isArrayLikeObject should return true when input is an array", () => {
        const a = [1, 2, 3];
        const result = isArrayLikeObject(a);
        expect(result).toBe(true);
    })
})