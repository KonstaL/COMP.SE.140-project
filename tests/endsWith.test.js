import endsWith from '../comp.se.200-lib/src/endsWith';

describe("endsWith function", () => {
    test("endsWith should return true when called with string and letter it ends to", () => {
        const s = 'string';
        const l = 'g';
        const result = endsWith(s, l);
        expect(result).toBe(true);
    })


    test("endsWith should return true when called with string and letter from position", () => {
        const s = 'string';
        const l = 'r';
        const n = 3;
        const result = endsWith(s, l, n);
        expect(result).toBe(true);
    })

    test("endsWith should return false when called with string and wrong letter from position", () => {
        const s = 'string';
        const l = 'i';
        const n = 2;
        const result = endsWith(s, l, n);
        expect(result).toBe(false);
    })

})