import isEmpty from '../comp.se.200-lib/src/isEmpty';

describe("isEmpty function", () => {
    test("isEmpty should return true with an empty array", () => {
        const input = [];
        const result = isEmpty(input);
        expect(result).toBe(true);
    })

    test("isEmpty should return true with an empty object", () => {
        const input = {};
        const result = isEmpty(input);
        expect(result).toBe(true);
    })

    test("isEmpty should return false with a non-empty array", () => {
        const input = [1, 2, 3];
        const result = isEmpty(input);
        expect(result).toBe(false);
    })

    test("isEmpty should return false with a non-empty array", () => {
        const input = {'a': 1};
        const result = isEmpty(input);
        expect(result).toBe(false);
    })


    test("isEmpty should return true with a null input", () => {
        const input = null;
        const result = isEmpty(input);
        expect(result).toBe(true);
    })


    test("isEmpty should return true with an empty string input", () => {
        const input = '';
        const result = isEmpty(input);
        expect(result).toBe(true);
    })
})