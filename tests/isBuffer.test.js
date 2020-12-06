import isBuffer from '../comp.se.200-lib/src/isBuffer';

describe("isBuffer function", () => {
    test("isBuffer should return true if argument is a buffer", () => {
        const a = new Buffer.alloc(2);
        const result = isBuffer(a);
        expect(result).toBe(true);
    })
    
    test("isBuffer should return true if argument is a buffer", () => {
        const a = [1, 2, 3];
        const result = isBuffer(a);
        expect(result).toBe(false);
    })
})