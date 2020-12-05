import isObjectLike from '../comp.se.200-lib/src/isObjectLike';

describe("isObjectLike function", () => {
    test("isObjectLike should return true when called with an array", () => {
        const input = [1, 2, 3];
        const result = isObjectLike(input);
        expect(result).toBe(true);
    })

    test("isObjectLike should return true when called with an object", () => {
        const input = {};
        const result = isObjectLike(input);
        expect(result).toBe(true);
    })

    test("isObjectLike should return false when called with a function", () => {
        const input = () => 1;
        const result = isObjectLike(input);
        expect(result).toBe(false);
    })
})