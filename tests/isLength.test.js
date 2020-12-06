import isLength from '../comp.se.200-lib/src/isLength';

describe("isLength function", () => {
    test("isLength should return true with a positive integer", () => {
        const input = 20;
        const result = isLength(input);
        expect(result).toBe(true);
    })

    test("isLength should return false with a negative integer", () => {
        const input = -1;
        const result = isLength(input);
        expect(result).toBe(false);
    })
    test("isLength should return false with a string", () => {
        const input = '1';
        const result = isLength(input);
        expect(result).toBe(false);
    })
})